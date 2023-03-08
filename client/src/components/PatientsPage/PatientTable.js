
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
  }
}));

export default function PatientTable(props) {
  const { patients } = props;
  return (
    <div>
      {patients.length < 1 ?
      <p>No patients found.</p> : (
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
        <col width= '25%'/>
        <col width='10%'/>
        <col width='10%'/>
        <col width='10%'/>
        <col width='10%'/>
     </colgroup>

          <TableHead >
            <TableRow>
              <StyledTableCell sx={{borderTopLeftRadius:12}}>Patient ID</StyledTableCell>
              <StyledTableCell>Sex</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Weight</StyledTableCell>
              <StyledTableCell sx={{borderTopRightRadius:12}}>BMI</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(patient => (
              <StyledTableRow className='row' key={patient._id}>
                <StyledTableCell component='th' scope='row'>
                  {patient.PATIENT_ID}
                </StyledTableCell>
                <StyledTableCell align='left'>{patient.SEX}</StyledTableCell>
                <StyledTableCell align='left'>{patient.AGE}</StyledTableCell>
                <StyledTableCell align='left'>{patient.LATEST_WEIGHT} lbs</StyledTableCell>
                <StyledTableCell align='left'>{patient.LATEST_BMI}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ) }
      </div>
  );
      }