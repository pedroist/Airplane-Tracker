import React from 'react';
import "./App.css";
import { Container, Typography, Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlanesTable from './components/PlanesTable';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Airplanes in the Air
          </Typography>
          <PlanesTable />
        </Box>
      </Container>
    </QueryClientProvider>
  );
};

export default App;
