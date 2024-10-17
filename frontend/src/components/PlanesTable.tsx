import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, Button, Box, Alert, CircularProgress
} from '@mui/material';
import { usePlanes } from '../hooks/usePlanes';

interface Plane {
  icao24: string;
  callsign: string | null;
  originCountry: string | null;
  velocity: number | null;
  latitude: number | null;
  longitude: number | null;
}

const PlanesTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(30);

  const { data: planes, isLoading, isError, error } = usePlanes({ page, rowsPerPage });

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="400px">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Alert severity="error">{(error as Error).message || 'An error occurred while fetching planes.'}</Alert>;
  }

  return (
    <Paper>
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
            {(planes || []).map((plane: Plane) => (
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
        <Button onClick={() => setPage(page + 1)} disabled={(planes?.length ?? 0) < rowsPerPage}>
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
