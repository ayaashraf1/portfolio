/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor ,fireEvent} from '@testing-library/react';
import App from './App';



jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('App Test2', () => {
    it('should renders correctly',async() => {
    render(<App />);
    expect(screen.getByTestId("loading-container")).toBeVisible();
    jest.runOnlyPendingTimers();
    await waitFor(()=>{
        expect(screen.getByTestId("app")).toBeVisible();
    });
    });
    it("check mouse move for header image",async()=>{
        const {container} = render(<App />);
        expect(screen.getByTestId("loading-container")).toBeVisible();
        jest.runOnlyPendingTimers();
        await waitFor(()=>{
            expect(screen.getByTestId("app")).toBeVisible();
            expect(container.querySelector("#welcome-section")).toBeVisible();
            fireEvent.mouseMove(container.querySelector("#welcome-section"));
        });
        expect(setTimeout).toHaveBeenCalled();
    })
});

