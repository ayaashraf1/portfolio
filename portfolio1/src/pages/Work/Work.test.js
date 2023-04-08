import { render, screen ,fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Work from './Work.jsx';

describe('About Test2', () => {
    it('should renders correctly', () => {
        const {container } = render(<Work />);
        expect(screen.getByTestId("work-section")).toBeInTheDocument();
        expect(screen.getByText("Work")).toBeInTheDocument();
        expect(screen.getByText("Dig into my universe")).toBeInTheDocument();
        expect(screen.getByText("Analysis Project")).toBeInTheDocument();
        fireEvent.mouseOver(container.querySelector("#work-section .carousel-root"));
        waitFor(()=>{
            expect(screen.getByText("Analysis Project shows dashboard fo")).toBeVisible();
        })
    });
    it('check next arrow', () => {
        const {container } = render(<Work />);
        container.querySelector(".control-arrow.control-next").click();

         expect(screen.getByText("QuestionGame")).toBeInTheDocument();
        fireEvent.mouseOver(container.querySelector("#work-section .carousel-root"));
        waitFor(()=>{
            expect(screen.getByText("QuestionGame is a exam system that displ")).toBeVisible();
        })
    });
    it('check previous arrow', () => {
        const {container } = render(<Work />);
        container.querySelector(".control-arrow.control-next").click();
        expect(screen.getByText("QuestionGame")).toBeInTheDocument();

        container.querySelector(".control-arrow.control-prev").click();

        expect(screen.getByText("QuestionGame")).toBeInTheDocument();
        fireEvent.mouseOver(container.querySelector("#work-section .carousel-root"));
        waitFor(()=>{
            expect(screen.getByText("QuestionGame is a exam system that displ")).toBeVisible();
        })
    });
});

