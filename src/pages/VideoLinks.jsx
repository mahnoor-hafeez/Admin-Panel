import React from 'react';
import { Button } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PageHeader from '../components/common/PageHeader';
import DataTable from '../components/common/DataTable';

const VideoLinks = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 250 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'url', headerName: 'URL', width: 250 },
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
      title: 'Patient Care Guidelines', 
      description: 'Basic guidelines for patient care',
      url: 'https://youtube.com/watch?v=example1'
    },
    { 
      id: 2, 
      title: 'Medical Procedures', 
      description: 'Common medical procedures explained',
      url: 'https://youtube.com/watch?v=example2'
    },
  ];

  return (
    <>
      <PageHeader
        title="Educational Videos"
        buttonText="Add Video"
        buttonIcon={VideoCallIcon}
        onButtonClick={() => console.log('Add video clicked')}
      />
      <DataTable rows={rows} columns={columns} />
    </>
  );
};

export default VideoLinks;