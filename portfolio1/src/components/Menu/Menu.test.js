import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Menu from './Menu.jsx';

describe('Menu Test2', () => {
    it('should renders correctly', () => {
    render(<Menu />);
        expect(screen.getByText(/Aya's/i)).toBeInTheDocument();
        expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
        expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
        expect(screen.getByText(/WORK/i)).toBeInTheDocument();
        expect(screen.getByTestId("githubIcon")).toBeInTheDocument();
        expect(screen.getByTestId("menu-section")).toBeVisible();
    });
    it('check clicking of links', () => {
        render(<Menu />);
           screen.getByText(/ABOUT/i).click();
           waitFor(()=>{
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).toBeVisible();
           })
           screen.getByText(/CONTACT/i).click();
           waitFor(()=>{
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).not.toBeVisible();
            expect(screen.getByTestId("contact-section")).toBeVisible();

           })
           screen.getByText(/WORK/i).click();
           waitFor(()=>{
            expect(screen.getByTestId("menu-section")).not.toBeVisible();
            expect(screen.getByTestId("about-section")).not.toBeVisible();
            expect(screen.getByTestId("contact-section")).not.toBeVisible();
            expect(screen.getByTestId("work-section")).toBeVisible();

           })
        });
});

