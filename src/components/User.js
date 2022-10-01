import React, { useEffect, useState } from 'react';
import {styled} from '@mui/material/styles';
import {
  Typography,
  Button,
  Container,
  Paper,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  ButtonGroup
  } from '@mui/material';

import { NavLink } from 'react-router-dom';

const ParentContainer = styled(Container)(({theme}) => ({
  marginTop: theme.spacing(2),
}));
const PaperStyle = styled(Paper)(({theme}) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const User = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    UsersGet()
  },[]);

  const UsersGet = () => {
    fetch(`https://www.mecallapi.com/api/users`)
    .then(response => response.json())
    .then((result) => {setUsers(result)})
  }

  const UpdateUser = id => {
    window.location = '/update/'+id
  }

  const UserDelete = id => {
    var data = {
      'id' : id
    }

    fetch(`https://www.mecallapi.com/api/users/delete`,
    {
      method:'DELETE',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(
      (result) => {
        alert(result['message'])
        if(result['status'] === 'ok')
        {
          UsersGet();
        }
      }
    )
  }

  return (
    <div style={{flexGrow:1}}>

      <ParentContainer maxWidth="lg">
        <PaperStyle>
          <Box display="flex">
            <Box flexGrow={1}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              <NavLink to="/create"  style={{textDecoration:'none'}}>
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </NavLink>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='right'>ID</TableCell>
                  <TableCell align='right'>Avatar</TableCell>
                  <TableCell align='right'>First</TableCell>
                  <TableCell align='right'>Last</TableCell>
                  <TableCell align='right'>Username</TableCell>
                  <TableCell align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users.map((user) => (
                    <TableRow key={user.ID}>
                      <TableCell align='right'>{user.id}</TableCell>
                      <TableCell align='center'>
                        <Box display="flex" justifyContent="center">
                          <Avatar src={user.avatar}></Avatar>
                        </Box>
                      </TableCell>
                      <TableCell align="left">{user.fname}</TableCell>
                      <TableCell align="left">{user.lname}</TableCell>
                      <TableCell align="left">{user.username}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                          <Button onClick={() => UpdateUser(user.id)}>Edit</Button>
                          <Button onClick={() => UserDelete(user.id)}>Del</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          
        </PaperStyle>
      </ParentContainer>

    </div>
  )
}

export default User