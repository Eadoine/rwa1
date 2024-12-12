'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export default function Home() {
const handleSubmit = (event) => {
console.log("handling submit");
event.preventDefault();
const data = new FormData(event.currentTarget);
let email = data.get('email')
let pass = data.get('pass')
let name = data.get('name')
let Address = data.get('Address')
let tel = data.get('tel')
let mobile = data.get('mobile')
console.log("Sent tel:" + tel)
console.log("Sent Address:" + Address)
console.log("Sent mobile:" + mobile)
console.log("Sent name:" + name)
console.log("Sent email:" + email)
console.log("Sent pass:" + pass)
runDBCallAsync(`http://localhost:3000/api/login?email=${email}&pass=${pass}`)
}; // end handle submit
async function runDBCallAsync(url) {
const res = await fetch(url);
const data = await res.json();
if(data.data== "valid"){
console.log("login is valid!")
} else {
console.log("not valid ")
}
}
return (
<Container maxWidth="sm">
<Box sx={{ height: '100vh' }} >
<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
<TextField
margin="normal"
required
fullWidth
id="name"
label="name"
name="name"
autoComplete="current-name"
autoFocus
/><TextField
margin="normal"
required
fullWidth
id="email"
label="Email Address"
name="email"
autoComplete="email"
autoFocus
/>

<TextField
margin="normal"
required
fullWidth
name="pass"
label="Pass"
type="pass"
id="pass"
autoComplete="current-password"
/><TextField
margin="normal"
required
fullWidth
name="tel"
label="tel"
type="tel"
id="tel"
autoComplete="current-telephone"
/>
<TextField
margin="normal"
required
fullWidth
id="mobile"
label="mbile"
name="mobile"
autoComplete="current-mobile"
autoFocus
/><TextField
margin="normal"
required
fullWidth
id="Address"
label="Address"
name="Address"
autoComplete="current-Address"
autoFocus
/>

<FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/>
<Button
type="submit"
fullWidth
variant="contained"
sx={{ mt: 3, mb: 2 }}
>
Sign In
</Button>
</Box>
</Box>

</Container>
); // end return
}
