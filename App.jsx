import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import theme from './theme';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AdminLayout from './components/layout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/auth/Login';
import Dashboard from './pages/Dashboard';
import FrontDesk from './pages/FrontDesk';
import Patients from './pages/Patients';
import Clinics from './pages/Clinics';
import Reminders from './pages/Reminders';
import VideoLinks from './pages/VideoLinks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="front-desk" element={<FrontDesk />} />
                <Route path="patients" element={<Patients />} />
                <Route path="clinics" element={<Clinics />} />
                <Route path="reminders" element={<Reminders />} />
                <Route path="videos" element={<VideoLinks />} />
              </Route>
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
          </AuthProvider>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;