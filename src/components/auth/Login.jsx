import React, { useEffect } from 'react';
import { 
  Box, 
  Container, 
  Paper, 
  Typography, 
  Button 
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  useEffect(() => {
    // Load Google API
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse
        });
      };
    };

    loadGoogleScript();
  }, []);

  const handleGoogleResponse = (response) => {
    if (response.credential) {
      login(response);
    }
  };

  const handleGoogleLogin = () => {
    window.google.accounts.id.prompt();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Click Appointment System
          </Typography>
          <Typography component="h2" variant="h6" align="center" gutterBottom>
            Admin Login
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;