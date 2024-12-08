import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { PictureAsPdf, TableChart } from '@mui/icons-material';
import { exportToPDF, exportToCSV } from '../../utils/export';

const ExportButtons = ({ data, filename }) => {
  const handlePDFExport = () => {
    exportToPDF(data, filename);
  };

  const handleCSVExport = () => {
    exportToCSV(data, filename);
  };

  return (
    <ButtonGroup variant="contained" size="small" sx={{ mb: 2 }}>
      <Button
        startIcon={<PictureAsPdf />}
        onClick={handlePDFExport}
      >
        Export PDF
      </Button>
      <Button
        startIcon={<TableChart />}
        onClick={handleCSVExport}
      >
        Export CSV
      </Button>
    </ButtonGroup>
  );
};

export default ExportButtons;