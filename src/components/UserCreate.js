import React , {useState} from 'react'
import {styled} from '@mui/material/styles';
import { 
    Container,
    Button,
    TextField,
    Grid,
    Typography,
} from '@mui/material';

const ParentContainer = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(8),
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }));




const UserCreate = () => {

    const handleSubmit = e => {
        e.preventDefault();

        let data = {
            'fname':fname,
            'lname':lname,
            'username':username,
            'email':email,
            'avatar':avatar,
        }
        fetch(`https://www.mecallapi.com/api/users/create`,
        {
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        })
        .then(response => response.json())
        .then((result) => {
            alert(result['message'])
            if(result['status'] === 'ok')
            {
                window.location.href = '/';
            }
        })
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');



  return (
    <Container maxWidth="xs">
        <ParentContainer>
            <Typography component="h1" variant="h5">
                User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        onChange={(e) => setFname(e.target.value)}
                       autoFocus
                       ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        variant='outlined'
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
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
                        onChange = {(e) => setUsername(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
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
                        onChange={(e) => setAvatar(e.target.value)}
                        ></TextField>
                    </Grid>
                </Grid>
                <Button
                spacing={3}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                >Create</Button>
            </form>
        </ParentContainer>
    </Container>
  )
}

export default UserCreate