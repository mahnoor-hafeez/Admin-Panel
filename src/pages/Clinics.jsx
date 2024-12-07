import React from 'react';
import { Button } from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PageHeader from '../components/common/PageHeader';
import DataTable from '../components/common/DataTable';

const Clinics = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'doctors', headerName: 'Doctors', width: 120 },
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
    { id: 1, name: 'Main Clinic', address: '123 Main St, City', phone: '123-456-7890', doctors: 5 },
    { id: 2, name: 'Downtown Branch', address: '456 Oak St, City', phone: '098-765-4321', doctors: 3 },
  ];

  return (
    <>
      <PageHeader
        title="Clinic Management"
        buttonText="Add Clinic"
        buttonIcon={AddBusinessIcon}
        onButtonClick={() => console.log('Add clinic clicked')}
      />
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default Clinics;