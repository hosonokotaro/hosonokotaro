import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('メッセージをprops で渡す')).toBeInTheDocument();
  });
});
