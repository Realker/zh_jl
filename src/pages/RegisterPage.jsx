import React, { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Paper
} from '@mui/material';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        
        //Basic validation
        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        // Get existing users or empty array
        const users = JSON.parse(localStorage.getItem('users')) || []

        // Check if user already exists
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('User already exists. Please log in.');
            return;
        }

        // Add new user
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in');
        window.location.href = '/login'; // redirect after registration
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <Box component="form" onSubmit={handleRegister}>
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}