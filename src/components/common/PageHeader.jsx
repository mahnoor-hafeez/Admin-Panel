import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PageHeader = ({ title, buttonText, buttonIcon: Icon, onButtonClick }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
      <Typography variant="h4">{title}</Typography>
      {buttonText && (
        <Button 
          variant="contained" 
          startIcon={Icon && <Icon />}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default PageHeader;