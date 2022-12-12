import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function createData(id = null, vaccine_name = null, status_name = null , injection_info = []) {
  
  return {
    id,
    vaccine_name,
    status_name,
    history: injection_info,
  };
}

function Row(props) {
  
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.vaccine_name}
        </TableCell>
        <TableCell align="center">{row.status_name}</TableCell>
        {console.log(row)}
        <TableCell align="right">
            <Link to={`/ho-so-ca-nhan/chi-tiet-lich-kham/${row.id}`}><i className="fas fa-edit"></i></Link>    
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Lịch sử tiêm
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ngày thực hiện</TableCell>
                    <TableCell>Tên hoạt động</TableCell>
                    <TableCell align="right">Kết quả sau khám</TableCell>
                    <TableCell align="right">Trạng thái</TableCell>
                  </TableRow>
                </TableHead>
       
                <TableBody>

                  {row.history.map((historyRow,index) => (

                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.time_apointment}
                      </TableCell>
                      <TableCell>{historyRow.type_name}</TableCell>
                      <TableCell align="right">{historyRow.description}</TableCell>
                      <TableCell align="right">
                        {historyRow.status_name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable(props) {

  const [rows, setRowss] = useState([]);
 
    useEffect(() => {
  
      let Arr =  props.list.map((item,value) => {
        
        return  createData(item.id, item.vaccine_name, item.status_name, item.injection_info)
      })
    setRowss(Arr)

    }, [])
    

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tên Vaccine</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            <TableCell align="right">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}