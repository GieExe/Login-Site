// src/components/MyComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Adjust the import path

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent name={''} />);
    const element = screen.getByText('Hello from MyComponent'); // Replace with actual text/content

    expect(element).toBeInTheDocument();
  });
});