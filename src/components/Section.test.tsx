import { render, screen } from '@testing-library/react';
import React from 'react';

import Section from '@/Section';

describe('Section', () => {
  test('タイトル Hello が表示されていること', () => {
    render(<Section title="Hello" content={<></>} />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('文言 こんにちは が表示されていること', () => {
    render(<Section title="Hello" content={<div>こんにちは</div>} />);

    expect(screen.getByText('こんにちは')).toBeInTheDocument();
  });
});
