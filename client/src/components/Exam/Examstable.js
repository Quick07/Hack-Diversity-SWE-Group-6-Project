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

function createData(
  PatientID,
  ExamID,
  Image,
  KeyFindings,
  Age,
  Sex,
  BMI,
  ZipCode
) {
  return { PatientID, ExamID, Image, KeyFindings, Age, Sex, BMI, ZipCode };
}

const rows = [
  createData(1, '000', 1, 6.0, 24, 'F', 200, 1),
  createData(2, '001', 2, 9.0, 37, 'M', 1, 2),
  createData(3, '002', 3, 16.0, 24, 'F', 2, 3),
  createData(4, '003', 4, 3.7, 67, 'F', 3, 4),
  createData(5, '004', 5, 16.0, 49, 'M', 4, 5),
];

export default function Examstable() {
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
              <StyledTableCell align='left'>Age</StyledTableCell>
              <StyledTableCell align='left'>Sex</StyledTableCell>
              <StyledTableCell align='left'>BMI</StyledTableCell>
              <StyledTableCell align='left'>Zip Code</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.PatientID}>
                <StyledTableCell component='th' scope='row'>
                  {row.PatientID}
                </StyledTableCell>

                <StyledTableCell align='left'>{row.ExamID}</StyledTableCell>
                <StyledTableCell align='left'>{row.image}</StyledTableCell>
                <StyledTableCell align='left'>
                  {row.KeyFindings}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.Age}</StyledTableCell>
                <StyledTableCell align='left'>{row.Sex}</StyledTableCell>
                <StyledTableCell align='left'>{row.BMI}</StyledTableCell>
                <StyledTableCell align='left'>{row.ZipCode}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
