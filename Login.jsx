import React from 'react';
import { 
  Box, 
  Container, 
  Paper, 
  Typography, 
  Button,
  CircularProgress
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      // Simulate login for demo
      const mockGoogleResponse = {
        credential: 'mock_credential',
        profileObj: {
          email: 'demo@example.com',
          name: 'Demo User',
          role: 'admin'
        }
      };
      await login(mockGoogleResponse);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper 
          elevation={3} 
          sx={{ 
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Welcome Back
          </Typography>
          <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
            Click Appointment System
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;