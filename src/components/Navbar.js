import React from 'react';
import {styled} from '@mui/material/styles';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Icon = styled(IconButton)(({theme}) => ({
    marginRight:theme.spacing(2),
    textAlign:'center',
 }));


const Navbar = () => {

  return (
    <div style={{flexGrow:1}}>
        <AppBar position = "static">
            <Toolbar>
                <Icon edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon></MenuIcon>
                </Icon>
                <NavLink to='/' style={{color:'white',textDecoration:'none'}}>
                    <Typography variant='h6' sx={{flexGrow:1}}> CRUD </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar