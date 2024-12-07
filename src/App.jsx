import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
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
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
}

export default App;