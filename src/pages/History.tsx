import React, { useState } from 'react'

import { Alert, Button, IconButton, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { SampleData } from "../data/SampleData";
import type { Withdrawal } from '../data/SampleType';
import Itemtable from '../components/Withdrawaltable';
import AddDialog from '../components/AddDialog';
import DetailDialog from '../components/DetailDialog';

  const WithdrawalStatus = [
    { value: 'pending', label: 'รอดำเนินการ' },
    { value: 'processing', label: 'กำลังดำเนินการ' },
    { value: 'completed', label: 'เสร็จสิ้น' },
    { value: 'failed', label: 'ถูกปฏิเสธ' },
    { value: 'canceled', label: 'ถูกยกเลิก' },
  ];


  export const BankSelector = [
    { value: 'BBL', label: 'ธนาคารกรุงเทพ' },
    { value: 'KBank', label: 'ธนาคารกสิกรไทย' },
    { value: 'SCB', label: 'ธนาคารไทยพาณิชย์' },
    { value: 'BAY', label: 'ธนาคารกรุงศรีอยุธยา' },
    { value: 'TMB', label: 'ธนาคารทหารไทย' }
  ];


const History = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ statusFilter, setStatusFilter ] = useState('');
    const [ startAt, setStartAt ] = useState('');
    const [ endAt, setEndAt ] = useState('');
    const [ addDialogOpen, setAddDialogOpen ] = useState(false);
    const [ detailDialogOpen, setDetailDialogOpen ] = useState(false);
    const [ selectedItem, setSelectedItem ] = useState<Withdrawal | null>(null);
    const [ snackbarOpen, setSnackbarOpen ] = useState<boolean>(false)
    const [ snackbarMsg, setSnackbarMsg ] = useState<string>('')
    const [ snackbarSeverity, setSnackbarSeverity ] = useState<'success'|'error'|'info'|'warning'>('success')
    const [ userName, setUserName ]  = useState<string>('')
    const [ accountNumber, setAccountNumber ] = useState<string>('')
    const [ amount, setAmount ] = useState<number>(0)
    const [ bank, setBank ] = useState<string>(BankSelector[0].value)
    
    const clearFilters = () => {
      setSearchTerm('');
      setStatusFilter('');
      setStartAt('');
      setEndAt('');
    }
  
    const filteredData = SampleData.filter((wd) => {
      // search by userName or accountNumber
      const q = searchTerm.trim().toLowerCase();
      if (q) {
        const matchesSearch = wd.userName.toLowerCase().includes(q) || wd.accountNumber.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }
  
      // status filter
      if (statusFilter) {
        if (wd.status !== statusFilter) return false;
      }
  
      // datetime range filter
      const itemDate = new Date(wd.createdAt);
      if (startAt) {
        const start = new Date(startAt);
        if (itemDate < start) return false;
      }
      if (endAt) {
        const end = new Date(endAt);
        if (itemDate > end) return false;
      }
  
      return true;
    });

    const verifyForm = () => {
      if (!userName || !accountNumber || amount <= 0 || !bank) {
        return false;
      }
      return true;
    }

    const handleAdd = () => {

      if (!verifyForm()) {
        setSnackbarSeverity('error')
        setSnackbarMsg('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง')
        setSnackbarOpen(true)
        return
      }

      //// Success status ////
      setSnackbarSeverity('success')
      setSnackbarMsg('เพิ่มรายการสำเร็จ')
      setSnackbarOpen(true)

      //// Reset form ////
      setUserName('')
      setAccountNumber('')
      setAmount(0)
      setBank(BankSelector[0].value)

      setAddDialogOpen( false );
    }

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Stack
        direction={{ 
          xs: 'column', 
          md: 'row' 
        }}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: '100%', md: '80%' },
          height: 'auto',
          margin: '0 auto',
          padding: "16px 0",
          borderRadius: 4,
          backgroundColor: "#fff",
          gap: 1,
        }}
      >
        <TextField
          label="ชื่อผู้ใช้/เลขที่บัญชี"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "80%", md: "20%" } 
          }}
        />

        <TextField
          select
          label="สถานะ"
          variant="outlined"
          size="small"
          value={statusFilter}
          onChange={(e) => setStatusFilter(String(e.target.value))}
          sx={{ 
            width: { xs: "80%", md: "20%" } 
          }}
        >
          <MenuItem value="">ทั้งหมด</MenuItem>
          {WithdrawalStatus.map((status) => (
            <MenuItem 
              key={status.value}
              value={status.value}
            >
              {status.label}
            </MenuItem>
          ))}
        </TextField>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: { xs: "80%", md: "40%" },
            height: 'auto',
            margin: '0',
            borderRadius: 4,
            backgroundColor: "#fff",
            gap: 1,
          }}
        >
          <TextField
            label="จากวันที่"
            type="datetime-local"
            size="small"
            value={startAt}
            onChange={(e) => setStartAt(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ 
              width: "50%"
            }}
          />

          <TextField
            label="ถึงวันที่"
            type="datetime-local"
            size="small"
            value={endAt}
            onChange={(e) => setEndAt(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            sx={{ 
              width: "50%"
            }}
          />
        </Stack>

        <Button
          variant={"outlined"}
          color="primary"
          sx={{
            width: { xs: "80%", md: "15%" },
            ":hover": { 
              backgroundColor: "#4a6af8ff",
              borderColor: "#ffffffff",
              color: "#ffffffff"
            }
          }}
          onClick={clearFilters}
        >
          ล้างตัวกรอง
        </Button>
      </Stack>

      <Itemtable ItemList={filteredData} onClickItem={(item) => { setSelectedItem(item); setDetailDialogOpen(true); }} />

      <IconButton
        color="primary"
        aria-label="add withdrawal"
        size='large'
        sx={{ 
          position: 'fixed', 
          bottom: 30, 
          right: 40
        }}
        onClick={() => setAddDialogOpen(true)}
      >
        <AddCircleIcon
          sx={{
            width: 50,
            height: 50
          }}
        />
      </IconButton>

      <AddDialog
        open={addDialogOpen}
        userName={userName}
        accountNumber={accountNumber}
        amount={amount}
        bank={bank}
        setUserName={setUserName}
        setAccountNumber={setAccountNumber}
        setAmount={setAmount}
        setBank={setBank}
        onClose={() => setAddDialogOpen(false)}
        handleAdd={handleAdd}
      />

      <DetailDialog
        open={detailDialogOpen}
        onClose={() => setDetailDialogOpen(false)}
        item={selectedItem ?? undefined}
      />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ 
          vertical: 'bottom', 
          horizontal: 'center' 
        }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity={snackbarSeverity} 
          sx={{ width: '100%' }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default History