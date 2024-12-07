import React from 'react';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PageHeader from '../components/common/PageHeader';
import DataTable from '../components/common/DataTable';

const FrontDesk = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
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
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  ];

  return (
    <>
      <PageHeader
        title="Front Desk Staff"
        buttonText="Add Staff"
        buttonIcon={PersonAddIcon}
        onButtonClick={() => console.log('Add staff clicked')}
      />
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default FrontDesk;