import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

describe('Avatar', () => {
  it('renders the avatar with custom className', () => {
    render(<Avatar className="custom-class" />);
    const avatar = screen.getByRole('img'); // Assuming Avatar implicitly has an img role
    expect(avatar).toHaveClass('custom-class');
  });

  it('AvatarFallback displays correct fallback text', () => {
    render(<AvatarFallback>FB</AvatarFallback>);
    expect(screen.getByText('FB')).toBeInTheDocument();
  });

  it('AvatarImage loads image with provided src', () => {
    const testSrc = "path/to/test/image.jpg";
    render(<AvatarImage src={testSrc} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', testSrc);
  });
});
