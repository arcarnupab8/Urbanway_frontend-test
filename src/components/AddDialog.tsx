import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
  IconButton,
  Typography,
  Box,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { BankSelector } from '../pages/History';

interface Myprops {
  open: boolean;
  userName: string;
  accountNumber: string;
  amount: number;
  bank: string;
  setUserName: (name: string) => void;
  setAccountNumber: (account: string) => void;
  setAmount: (amount: number) => void;
  setBank: (bank: string) => void;
  onClose: () => void;
  handleAdd?: () => void
}

const AddDialog: React.FC<Myprops> = (props) => {

  const [ note, setNote ] = useState<string>('')
  const [ files, setFiles ] = useState<File[]>([])
  const [ fileError, setFileError ] = useState<string | null>(null)

  useEffect(() => {
    if (props.open) {
      props.setUserName('')
      props.setAccountNumber('')
      props.setAmount(0)
      props.setBank(BankSelector[0].value)
      setNote('')
      setFiles([])
      setFileError(null)
    }
  }, [props.open])

  return (
    <Dialog 
        open={props.open} 
        onClose={props.onClose} 
        fullWidth 
        maxWidth="sm"
    >
      <DialogTitle>เพิ่มรายการถอนใหม่</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="ชื่อผู้ใช้"
            value={props.userName}
            onChange={(e) => props.setUserName(e.target.value)}
            size="small"
            fullWidth
            required
          />

          <TextField
            label="เลขที่บัญชี" 
            value={props.accountNumber}
            onChange={(e) => props.setAccountNumber(e.target.value)}
            size="small"
            fullWidth
            required
          />

          <TextField
            label="จำนวนเงิน"
            type="number" 
            value={props.amount}
            onChange={(e) => props.setAmount(Number(e.target.value))}
            size="small"
            fullWidth
            required
          />

          <TextField
            select
            label="ธนาคาร" 
            value={props.bank}
            onChange={(e) => props.setBank(String(e.target.value))}
            size="small"
            fullWidth
            required
          >
            {BankSelector.map((bank) => (
              <MenuItem 
                key={bank.value}
                value={bank.value}
              >
                {bank.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="หมายเหตุ (ไม่บังคับ)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            size="small"
            fullWidth
            multiline
            rows={3}
          />

          <Box>
            <input
              id="add-files"
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.gif,.mp4,.mov,.pdf"
              style={{ display: 'none' }}
              onChange={(e) => {
                const selected = e.target.files
                if (!selected) return
                const arr = Array.from(selected)
                // push files without validation; parent will validate on submit
                setFiles(prev => [...prev, ...arr])
                setFileError(null)
                ;(e.target as HTMLInputElement).value = ''
              }}
            />

            <label htmlFor="add-files">
                <Typography variant='subtitle1'>ไฟล์แนบ (ไม่บังคับ)</Typography>
                <Button variant="outlined" component="span" size="small">
                    เลือกไฟล์ 
                </Button>
            </label>

            {fileError ? (
              <Typography color="error" variant="caption" sx={{ display: 'block', mt: 0.5 }}>{fileError}</Typography>
            ) : null}

            {files.length > 0 && (
              <Box sx={{ mt: 1 }}>
                {files.map((f, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="body2" sx={{ flex: 1 }}>{f.name} ({Math.round(f.size / 1024)} KB)</Typography>
                    <IconButton size="small" onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}

          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>ยกเลิก</Button>
        <Button 
            variant="contained" 
            onClick={() => {
              props.handleAdd?.()
            }} 
        >
          เพิ่ม
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default AddDialog
