import React from 'react';
import { Button } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PageHeader from '../components/common/PageHeader';
import DataTable from '../components/common/DataTable';

const Reminders = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'patientName', headerName: 'Patient', width: 200 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button size="small" color="primary">Edit</Button>
          <Button size="small" color="error">Delete</Button>
        </>
      ),
    },
  ];

  const rows = [
    { 
      id: 1, 
      patientName: 'John Doe', 
      type: 'Follow-up',
      date: '2024-03-20',
      status: 'Pending'
    },
    { 
      id: 2, 
      patientName: 'Jane Smith', 
      type: 'Appointment',
      date: '2024-03-21',
      status: 'Sent'
    },
  ];

  return (
    <>
      <PageHeader
        title="Reminder Management"
        buttonText="Add Reminder"
        buttonIcon={NotificationsActiveIcon}
        onButtonClick={() => console.log('Add reminder clicked')}
      />
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default Reminders;