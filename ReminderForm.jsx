import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Grid,
  MenuItem 
} from '@mui/material';

const ReminderForm = ({ open, onClose, initialData = null }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    onClose();
  };

  const reminderTypes = [
    { value: 'APPOINTMENT', label: 'Appointment' },
    { value: 'FOLLOWUP', label: 'Follow-up' },
    { value: 'MEDICATION', label: 'Medication' }
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{initialData ? 'Edit Reminder' : 'Add New Reminder'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Patient Name"
                defaultValue={initialData?.patientName || ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                required
                fullWidth
                label="Reminder Type"
                defaultValue={initialData?.type || ''}
              >
                {reminderTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="datetime-local"
                label="Date & Time"
                defaultValue={initialData?.date || ''}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                defaultValue={initialData?.message || ''}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialData ? 'Update' : 'Add'} Reminder
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ReminderForm;