import React from 'react'
import type { Withdrawal } from '../data/SampleType';
import { SampleData } from '../data/SampleData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(order: Order, orderBy: Key) {
  return order === 'desc'
    ? (a: { [key in Key]: any }, b: { [key in Key]: any }) => descendingComparator(a, b, orderBy)
    : (a: { [key in Key]: any }, b: { [key in Key]: any }) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilized = array.map((el, index) => [el, index] as [T, number]);
  stabilized.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilized.map((el) => el[0]);
}

const headCells: { id: keyof Withdrawal; label: string; numeric?: boolean }[] = [
  { id: 'id', label: 'ไอดี' },
  { id: 'userName', label: 'ชื่อผู้ใช้' },
  { id: 'accountNumber', label: 'เลขที่บัญชี' },
  { id: 'amount', label: 'จำนวนเงิน', numeric: true },
  { id: 'status', label: 'สถานะ' },
  { id: 'createdAt', label: 'วันที่สร้าง' },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Withdrawal) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Withdrawal) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//// Interface /////
interface Myprops {
  ItemList: Withdrawal[];
  onClickItem?: (item: Withdrawal) => void;
}

const Itemtable: React.FC<Myprops> = (props) => {
  const rows = props.ItemList;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Withdrawal>('createdAt');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Withdrawal) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sorted = stableSort(rows, getComparator(order, orderBy));
  const visibleRows = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper
      sx={{ 
        width: { xs: '100%', md: '80%' }, 
        mb: 2 
      }}
    >
      <TableContainer>
        <Table>
          <EnhancedTableHead 
            order={order} 
            orderBy={String(orderBy)} 
            onRequestSort={handleRequestSort} 
          />
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow hover 
                key={row.id} 
                onClick={() => props.onClickItem?.(row)} 
                style={{ 
                  cursor: props.onClickItem ? 'pointer' : 'default' 
                }}>
                <TableCell align='center'>{row.id}</TableCell>
                <TableCell align='center'>{row.userName}</TableCell>
                <TableCell align='center'>{row.accountNumber}</TableCell>
                <TableCell align="center">{row.amount.toLocaleString()}</TableCell>
                <TableCell align='center'>{row.status}</TableCell>
                <TableCell align='center'>{new Date(row.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default Itemtable