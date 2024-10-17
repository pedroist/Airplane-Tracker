import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Plane {
  icao24: string;
  callsign: string | null;
  originCountry: string | null;
  velocity: string | null;
  latitude: string | null;
  longitude: string | null;
}

interface UsePlanesOptions {
  page: number;
  rowsPerPage: number;
}

const fetchPlanes = async ({ page, rowsPerPage }: UsePlanesOptions): Promise<Plane[]> => {
  const response = await axios.get(`/api/planes?page=${page + 1}&limit=${rowsPerPage}`);
  return response.data;
};

export const usePlanes = ({ page, rowsPerPage }: UsePlanesOptions) => {
  return useQuery({
    queryKey: ['planes', page, rowsPerPage],
    queryFn: () => fetchPlanes({ page, rowsPerPage }),
  });
};
