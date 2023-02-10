import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';


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

function createData(PatientID, ExamID, Image, KeyFindings, Age, Sex, BMI, ZipCode) {
  return { PatientID, ExamID, Image, KeyFindings, Age, Sex, BMI, ZipCode};
}

const rows = [
  createData(1,'000', 1, 6.0, 24, 'F', 200,1),
  createData(2,'001', 2, 9.0, 37, 'M', 1,2),
  createData(3,'002', 3, 16.0, 24, 'F', 2,3),
  createData(4,'003', 4, 3.7, 67, 'F', 3,4),
  createData(5,'004', 5, 16.0, 49, 'M',4,5),
  
];

export default function Examstable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Patient ID</StyledTableCell>
            <StyledTableCell align="right">Exam ID</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Key Findings</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Sex</StyledTableCell>
            <StyledTableCell align="right">BMI</StyledTableCell>
            <StyledTableCell align="right">Zip Code</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
                       <StyledTableRow key={row.PatientID}>
                       <StyledTableCell component="th" scope="row">
                         {row.PatientID}
                       </StyledTableCell>
         
              <StyledTableCell align="right">{row.ExamID}</StyledTableCell>
              <StyledTableCell align="right">{row.image}</StyledTableCell>
              <StyledTableCell align="right">{row.KeyFindings}</StyledTableCell>
              <StyledTableCell align="right">{row.Age}</StyledTableCell>
              <StyledTableCell align="right">{row.Sex}</StyledTableCell>
              <StyledTableCell align="right">{row.BMI}</StyledTableCell>
              <StyledTableCell align="right">{row.ZipCode}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
