import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const isLoggedIn = !!localStorage.getItem('authToken');

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // redirect to Login after Logout
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Photography App
                </Typography>

            <Box>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                {!isLoggedIn && (
                    <>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Register
                        </Button>
                    </>
                )}
                {isLoggedIn && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
              </Box>
            </Toolbar>
        </AppBar>
    )
}