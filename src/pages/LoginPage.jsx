import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

export default function LoginPage() {
  // State Variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

     if (user) {
        localStorage.setItem('authToken', 'fake-jwt-token');
        alert('Login successful!');
        window.location.href = '/';
    } else {
        alert('Invalid email or password');
    }
    // // Mock authentication
    // if (email === 'jinyoung@example.com' && password === '123456') {
    //   localStorage.setItem('authToken', 'fake-jwt-token');
    //   alert('Login successful!');
    //   window.location.href = '/'; // redirect to homepage
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
