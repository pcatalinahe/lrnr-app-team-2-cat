import { describe, it } from 'vitest';
import { expect } from '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from '/Users/catalinaperez/Desktop/lrnr-app-team-2-cat/client/src/pages/Home.jsx';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('contains the tagline', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const tagline = screen.getByText(/your guided path to programming enlightenment/i);
    expect(tagline).toBeInTheDocument();
  });

  it('contains at least one button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('contains at least one image', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});
