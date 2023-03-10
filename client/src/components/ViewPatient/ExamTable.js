import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight:600,
    position:'sticky',
    top: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
  fontFamily: "inherit",
  paddingLeft:50,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  ':hover': {
    cursor: 'pointer',
  }}
));






export default function ExamTable(props) {
  const { exams } = props;
  const navigate = useNavigate();
  return (
    <div>
      {exams.length < 1 ?
      <p>No exams found.</p> : (
      <TableContainer className='table'component={Paper}>
        <Table 
          sx={{
            paddingLeft:20,
            align:'left',
            width: 'calc(0.796 * 100vw)'
          }}
          aria-label='customized table'
        >     
        <colgroup>
        <col width= '20%'/>
        <col width='20%'/>
        <col width='20%'/>
        <col width='40%'/>
     </colgroup>

          <TableHead >
            <TableRow>
              <StyledTableCell sx={{borderTopLeftRadius:12}}>Exam ID</StyledTableCell>
              <StyledTableCell>Patient ID</StyledTableCell>
              <StyledTableCell>Brixia Scores</StyledTableCell>
              <StyledTableCell sx={{borderTopRightRadius:12}}>Key Findings</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exams.map(exam => (
              <StyledTableRow className='row'  key={exam._id}>
                <StyledTableCell align='left'sx={{ '&:hover': { cursor: 'pointer' } }} onClick={() => {navigate(`../Exams/ViewExam/${exam._id}`); console.log(selectExamDest)}}>{exam.exam_Id}</StyledTableCell>
                <StyledTableCell>
                  <a>{exam.PATIENT_ID}</a>
                </StyledTableCell>
                <StyledTableCell align='left'>{exam.brixia_scores}</StyledTableCell>
                <StyledTableCell align='left'>{exam.key_findings}</StyledTableCell>
                </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ) }
      </div>
  );
      }