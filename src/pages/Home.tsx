import React from 'react'

import { SampleData, SampleUser } from "../data/SampleData";

import {
  Stack,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@mui/material'

const Home = () => {
  const withdrawals_amount = SampleData.map(wd => wd.amount).reduce((a, b) => a + b, 0);

  // aggregate totals per user
  const summaryMap = SampleData.reduce((acc: Record<string, { userName: string; total: number; count: number }>, wd) => {
    const key = wd.userName || 'Unknown'
    if (!acc[key]) acc[key] = { userName: wd.userName, total: 0, count: 0 }
    acc[key].total += wd.amount
    acc[key].count += 1
    return acc
  }, {})

  const summary = Object.values(summaryMap).sort((a, b) => b.total - a.total)

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        gap: 3,
      }}
    >
      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center' 
        gap={2} 
        width="100%"
      >
        <Paper sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6">{SampleUser.userName}</Typography>
          <Typography variant="body2" color="text.secondary">{SampleUser.id}</Typography>
        </Paper>

        <Stack direction={{ xs: 'column', md: 'row' }} gap={2} sx={{ flex: 2 }}>
          <Paper sx={{ flex: 1, p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">ยอดเงินคงเหลือ</Typography>
            <Typography variant="h5">{SampleUser.totalAmount} บาท</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">ยอดเงินที่ถูกถอน</Typography>
            <Typography variant="h5">{withdrawals_amount} บาท</Typography>
          </Paper>
        </Stack>
      </Stack>

      <Box width="100%">
        <Paper sx={{ width: '100%', p: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>สรุปรายการถอนตามผู้ใช้</Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ลำดับ</TableCell>
                <TableCell>ชื่อผู้ใช้</TableCell>
                <TableCell align="right">จำนวนรายการ</TableCell>
                <TableCell align="right">ยอดรวม (บาท)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((row, idx) => (
                <TableRow key={row.userName}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Stack>
  )
}

export default Home