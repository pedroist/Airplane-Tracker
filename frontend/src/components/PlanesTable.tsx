import React, { useState, useEffect } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  TablePagination, Button, Box, Alert
} from '@mui/material';
import axios from 'axios';

interface Plane {
  icao24: string;
  callsign: string | null;
  originCountry: string | null;
  velocity: number | null;
  latitude: number | null;
  longitude: number | null;
}

const PlanesTable: React.FC = () => {
  const [planes, setPlanes] = useState<Plane[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(30);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlanes();
  }, [page]);

  const fetchPlanes = async () => {
    try {
      const response = await axios.get(`/api/planes?page=${page + 1}&limit=${rowsPerPage}`);
      setPlanes(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching planes:', error);
      setError('Failed to fetch planes. Please try again later.');
    }
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Paper>
      {error && <Alert severity="error">{error}</Alert>}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ICAO24 Code</TableCell>
              <TableCell>Callsign</TableCell>
              <TableCell>Origin Country</TableCell>
              <TableCell>Velocity</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {planes.map((plane) => (
              <TableRow key={plane.icao24}>
                <TableCell>{plane.icao24}</TableCell>
                <TableCell>{plane.callsign}</TableCell>
                <TableCell>{plane.originCountry}</TableCell>
                <TableCell>{plane.velocity}</TableCell>
                <TableCell>{plane.latitude}</TableCell>
                <TableCell>{plane.longitude}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous Page
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={planes.length < rowsPerPage}>
          Next Page
        </Button>
      </Box>
      <TablePagination
        component="div"
        count={-1}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[30]}
      />
    </Paper>
  );
};

export default PlanesTable;
