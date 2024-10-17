import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlanesTable from '../PlanesTable';

describe('PlanesTable', () => {
  it('renders table headers', () => {
    render(<PlanesTable />);
    expect(screen.getByText('ICAO24 Code')).toBeInTheDocument();
    expect(screen.getByText('Callsign')).toBeInTheDocument();
    expect(screen.getByText('Origin Country')).toBeInTheDocument();
    expect(screen.getByText('Velocity')).toBeInTheDocument();
    expect(screen.getByText('Latitude')).toBeInTheDocument();
    expect(screen.getByText('Longitude')).toBeInTheDocument();
  });
});
