import { render, screen } from '@testing-library/react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
