import { render, screen } from '@testing-library/react';
import SocialNetworkApp from "./App";

test('renders learn react link', () => {
  render(<SocialNetworkApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
