import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import { Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Examstable() {
  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch('http://localhost:9000/exams')
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 700,
          minHeight: 800,
          '& .MuiTableCell-head': {
            color: 'white',
            backgroundColor: 'blue',
          },
        }}
        aria-label='customized table'
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Patient ID</StyledTableCell>
            <StyledTableCell align='left'>Exam ID</StyledTableCell>
            <StyledTableCell align='left'>Image</StyledTableCell>
            <StyledTableCell align='left'>Key Findings</StyledTableCell>
            <StyledTableCell align='left'>Brixia_scores</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow
              className='row'
              sx={{ '&:hover': { cursor: 'pointer' } }}
              onClick={() => navigate(`../Exams/ViewExam/${row._id}`)}
              key={row._id}
            >
              <StyledTableCell component='th' scope='row'>
                {row.PATIENT_ID}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.exam_Id}</StyledTableCell>
              <StyledTableCell align='left'>
                <img
                  src={row.xray_url}
                  alt='xray'
                  style={{ maxWidth: '70px' }}
                />
              </StyledTableCell>
              <StyledTableCell align='left'>{row.key_findings}</StyledTableCell>
              <StyledTableCell align='left'>
                {row.brixia_scores}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
