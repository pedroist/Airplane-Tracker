import React from 'react';
import "./App.css";
import { Container, Typography, Box } from '@mui/material';
import PlanesTable from './components/PlanesTable';

const App: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Airplanes in the Air
        </Typography>
        <PlanesTable />
      </Box>
    </Container>
  );
};

export default App;
