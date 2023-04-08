import { render, screen } from '@testing-library/react';
import React from 'react';
import Loading from './Loading.jsx';

jest.mock( "../../assets/loadingIcon.gif")

describe('Loading Test2', () => {
    it('should renders correctly', () => {
    render(<Loading />);
        expect(screen.getByTestId("loading-container")).toBeInTheDocument();
    });
});

