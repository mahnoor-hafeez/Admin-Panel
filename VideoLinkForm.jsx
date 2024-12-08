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

const VideoLinkForm = ({ open, onClose, initialData = null }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{initialData ? 'Edit Video' : 'Add New Video'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Title"
                defaultValue={initialData?.title || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="YouTube URL"
                defaultValue={initialData?.url || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                defaultValue={initialData?.description || ''}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialData ? 'Update' : 'Add'} Video
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default VideoLinkForm;