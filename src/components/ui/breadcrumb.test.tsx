import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders BreadcrumbList with children', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('BreadcrumbItem renders with custom className', () => {
    render(<BreadcrumbItem className="custom-item">Item</BreadcrumbItem>);
    const item = screen.getByText('Item');
    expect(item).toHaveClass('custom-item');
  });

  it('BreadcrumbSeparator renders the default separator', () => {
    render(<BreadcrumbSeparator />);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
