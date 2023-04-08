import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import FooterSection from './FooterSection.jsx';

describe('FooterSection Test2', () => {
    it('should renders correctly', () => {
        render(<FooterSection />);
        expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
        expect(screen.getByText(/WORK/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
        expect(screen.getByText(/SOURCE CODE/i)).toBeInTheDocument();
        expect(screen.getByText(/Copyright © 2023 All Rights Reserved./i)).toBeInTheDocument();
    });
    it('check clicking of links', () => {
        render(<FooterSection />);
        screen.getByText(/ABOUT/i).click();
        waitFor(() => {
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).toBeVisible();
        })
        screen.getByText(/CONTACT/i).click();
        waitFor(() => {
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).not.toBeVisible();
            expect(screen.getByTestId("contact-section")).toBeVisible();

        })
        screen.getByText(/WORK/i).click();
        waitFor(() => {
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).not.toBeVisible();
            expect(screen.getByTestId("contact-section")).not.toBeVisible();
            expect(screen.getByTestId("work-section")).toBeVisible();

        })
    });
});

