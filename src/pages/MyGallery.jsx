import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, Button } from '@mui/material';

export default function MyGallery() {
    const [images, setImages] = useState([]);
    const userToken = localStorage.getItem('authToken');
    const currentUser = JSON.parse(localStorage.getItem('currentUser')); // store user at login

    // Load user images from LocalStorage
    useEffect(() => {
         if (currentUser) {
            const stored = JSON.parse(localStorage.getItem(`gallery_${currentUser.email}`)) || [];
            setImages(stored);
        }
    }, [currentUser]);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const newImages = [...images, reader.result];
            setImages(newImages);
            localStorage.setItem(`gallery_${currentUser.email}`, JSON.stringify(newImages));
        };
        reader.readAsDataURL(file); // convert image to Base64
    };

    if (!userToken) {
        return (
            <Container>
                <Typography variant="h5" align="center" sx={{ mt: 4}}>
                    Please Log in to view your gallery.
                </Typography>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 5}}>
            <Typography variant="h4" gutterBottom>
                my Gallery
            </Typography>
            
            <Button variant="contained" component="label" sx={{ mb: 3}}>
                Upload Photo
                <input type="file" hidden accept="image/*" onChange={handleUpload} />
            </Button>

            <Grid container spacing={2}>
                {images.length === 0 ? (
                <Typography>No images uploaded yet.</Typography>
                ) : (
                    images.map((img, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Card>
                            <CardMedia component="img" height="200" image={img} alt={`Upload ${idx}`} />
                        </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
}