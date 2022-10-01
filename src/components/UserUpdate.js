import React, {useState,useEffect} from 'react'
import {
    Button,
    TextField,
    Grid,
    Typography,
    Container
} from '@mui/material';
import { useParams } from 'react-router-dom';

const UserUpdate = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch("https://www.mecallapi.com/api/users/"+id)
        .then(response => response.json())
        .then(
            (result) => {
                  setFname(result.user.fname)
                  setLname(result.user.lname)
                  setUsername(result.user.username)
                  setEmail(result.user.email)
                  setAvatar(result.user.avatar)  
            }
        )
    },[id]);

    const handleSubmit = e => {
        e.preventDefault();

        let data = {
            'id':id,
            'fname':fname,
            'username':username,
            'email':email,
            'avatar':avatar,
        }
        fetch(`https://www.mecallapi.com/api/users/update`,
        {
            method:'PUT',
            headers:{
                Accept: 'application/form-data',
               'Content-Type': 'application/json',
            },
            body:JSON.stringify(data),
        })
        .then(response => response.json())
        .then(
            (result) => {
                alert(result['message'])
                if(result['status'] === 'ok')
                {
                    window.location.href='/';
                }
            }
        )
    }



  return (

    <Container maxWidth="xs">
        <div>
            <Typography component="h1" variant="h5">
                User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}sm={6}>
                        <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        autoFocus
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="avatar"
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
                </Grid>
                <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"           
          >
            Update
          </Button>
            </form>
        </div>
    </Container>
  )
}

export default UserUpdate