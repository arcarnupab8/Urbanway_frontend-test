import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import type { History } from '../data/SampleType'

interface Attachment {
  name: string
  url: string
  type?: string
}

interface DetailDialogProps {
  open: boolean
  onClose: () => void
  item?: {
    id?: string
    userName?: string
    accountNumber?: string
    amount?: number
    bank?: string
    status?: string
    createdAt?: string
    note?: string
    attachments?: Attachment[]
    history? : History[]
  }
}

const isImage = (url: string, type?: string) => {
  if (type && type.startsWith('image')) return true
  return /\.(png|jpe?g|gif|webp|bmp)(\?.*)?$/i.test(url)
}

const formatDate = (iso?: string) => {
  if (!iso) return '-'
  try {
    const d = new Date(iso)
    return d.toLocaleString()
  } catch {
    return iso
  }
}

const DetailDialog: React.FC<DetailDialogProps> = ({ open, onClose, item }) => {
  const attachments = item?.attachments || []

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>รายละเอียดรายการถอน</DialogTitle>

      <DialogContent dividers>
        {!item ? (
          <Typography color="text.secondary">ไม่มีข้อมูล</Typography>
        ) : (
            <Stack 
                spacing={2}
            >
                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">ชื่อผู้ใช้</Typography>
                        <Typography>{item.userName || '-'}</Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">เลขที่บัญชี</Typography>
                        <Typography>{item.accountNumber || '-'}</Typography>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">จำนวนเงิน</Typography>
                        <Typography>{item.amount ?? '-'} บาท</Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">ธนาคาร</Typography>
                        <Typography>{item.bank || '-'}</Typography>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">สถานะ</Typography>
                        <Typography>{item.status || '-'}</Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary">วัน เวลา</Typography>
                        <Typography>{formatDate(item.createdAt)}</Typography>
                    </Box>
                </Stack>

                {item.note ? (
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">หมายเหตุ</Typography>
                        <Typography>{item.note}</Typography>
                    </Box>
                ) : null}
                
                <Stack 
                    direction="row" 
                    spacing={2}
                >
                    {item.history ? (
                        <Box sx={{ flex: 1 }}>
                            <Typography 
                                variant="subtitle2" 
                                sx={{ mb: 1 }}
                            >
                                ประวัติการเปลี่ยนแปลง
                            </Typography>

                            {item.history && item.history.length > 0 ? (
                                <List>
                                {item.history.map((h, i) => (
                                    <ListItem key={i} sx={{ alignItems: 'flex-start' }}>
                                    <ListItemText
                                        primary={h.status}
                                        secondary={formatDate(h.at)}
                                    />
                                    </ListItem>
                                ))}
                                </List>
                            ) : (
                                <Typography color="text.secondary">ไม่มีประวัติการเปลี่ยนแปลง</Typography>
                            )}
                        </Box>
                    ) : null}

                    <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>ไฟล์แนบ</Typography>

                        {attachments.length === 0 ? (
                            <Typography color="text.secondary">ไม่มีไฟล์แนบ</Typography>
                        ) : (
                            <List>
                            {attachments.map((att, idx) => (
                                <ListItem key={idx} sx={{ alignItems: 'flex-start' }}>
                                {isImage(att.url, att.type) ? (
                                    <Box sx={{ mr: 2 }}>
                                    <img src={att.url} alt={att.name} style={{ maxWidth: 120, maxHeight: 90, objectFit: 'cover', borderRadius: 4 }} />
                                    </Box>
                                ) : null}

                                <ListItemText
                                    primary={att.name}
                                    secondary={(
                                    <Link href={att.url} target="_blank" rel="noreferrer" underline="hover">เปิด/ดาวน์โหลด</Link>
                                    )}
                                />
                                </ListItem>
                            ))}
                            </List>
                        )}
                    </Box>
                </Stack>
                
            </Stack>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>ปิด</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DetailDialog