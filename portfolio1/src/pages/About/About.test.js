import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './About.jsx';

describe('About Test2', () => {
    it('should renders correctly', () => {
    render(<About />);
        expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
        expect(screen.getByText(/I'm Aya, a passionate developer bringing/i)).toBeInTheDocument();
    });
});

