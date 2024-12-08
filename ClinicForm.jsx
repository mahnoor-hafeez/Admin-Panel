import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Grid 
} from '@mui/material';

const ClinicForm = ({ open, onClose, initialData = null }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{initialData ? 'Edit Clinic' : 'Add New Clinic'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Clinic Name"
                defaultValue={initialData?.name || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                multiline
                rows={2}
                defaultValue={initialData?.address || ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Phone"
                defaultValue={initialData?.phone || ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Number of Doctors"
                type="number"
                defaultValue={initialData?.doctors || ''}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialData ? 'Update' : 'Add'} Clinic
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ClinicForm;