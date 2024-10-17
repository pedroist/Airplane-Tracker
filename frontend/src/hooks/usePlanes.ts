import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Plane } from '../types/Plane';

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
