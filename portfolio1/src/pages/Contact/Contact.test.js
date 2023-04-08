import { render, screen ,fireEvent ,waitFor} from '@testing-library/react';
import React from 'react';
import Contact from './Contact.jsx';

describe('Contact Test2', () => {
    it('should renders correctly', () => {
    render(<Contact />);
        expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
        expect(screen.getByText(/Got a problem to solve?/i)).toBeInTheDocument();
        expect(screen.getByText(/Get your space suit ready/i)).toBeInTheDocument();
        expect(screen.getByText(/Ayaashraf1111@gmail.com/i)).toBeInTheDocument();
    });
    it('fill form with valid data', () => {
        render(<Contact />);
        fireEvent.change(screen.getByLabelText(/NAME/i), {target: {value: 'test'}});  
        expect(screen.getByLabelText(/NAME/i).value).toEqual('test');
        fireEvent.change(screen.getByLabelText(/EMAIL/i), {target: {value: 'test@t.com'}});  
        expect(screen.getByLabelText(/EMAIL/i).value).toEqual('test@t.com');
        fireEvent.change(screen.getByLabelText(/MESSAGE/i), {target: {value: 'test message'}});  
        expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('test message');
        
        screen.getByRole("button").click();
        waitFor(()=>{
            expect(screen.getByLabelText(/NAME/i).value).toEqual('');
            expect(screen.getByLabelText(/EMAIL/i).value).toEqual('');
            expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('');
        })
    });
    it('check form validation', () => {
        render(<Contact />);
        fireEvent.change(screen.getByLabelText(/NAME/i), {target: {value: 'test'}});  
        expect(screen.getByLabelText(/NAME/i).value).toEqual('test');
        fireEvent.change(screen.getByLabelText(/NAME/i), {target: {value: ''}});  
        expect(screen.getByLabelText(/NAME/i).value).toEqual('');
        expect(screen.getByText("Name is empty")).toBeVisible();
        fireEvent.focus(screen.getByLabelText(/NAME/i), {target: {value: 'test2'}});  
        expect(screen.getByLabelText(/NAME/i).value).toEqual('test2');
        fireEvent.focus(screen.getByLabelText(/NAME/i), {target: {value: ''}});  
        expect(screen.getByLabelText(/NAME/i).value).toEqual('');
        expect(screen.getByText("Name is empty")).toBeVisible();


        fireEvent.change(screen.getByLabelText(/EMAIL/i), {target: {value: 'test'}});  
        expect(screen.getByLabelText(/EMAIL/i).value).toEqual('test');
        expect(screen.queryByText("Email is empty or invalid")).toBeNull();
        fireEvent.change(screen.getByLabelText(/EMAIL/i), {target: {value: ''}}); 
        expect(screen.getByLabelText(/EMAIL/i).value).toEqual('');
        expect(screen.getByText("Email is empty or invalid")).toBeVisible();

        fireEvent.focus(screen.getByLabelText(/EMAIL/i), {target: {value: 'test2'}});  
        expect(screen.getByLabelText(/EMAIL/i).value).toEqual('test2');
        expect(screen.queryByText("Email is empty or invalid")).toBeNull();
        fireEvent.focus(screen.getByLabelText(/EMAIL/i), {target: {value: ''}}); 
        expect(screen.getByLabelText(/EMAIL/i).value).toEqual('');
        expect(screen.getByText("Email is empty or invalid")).toBeVisible();

        fireEvent.change(screen.getByLabelText(/MESSAGE/i), {target: {value: 'test message'}});  
        expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('test message');
        fireEvent.change(screen.getByLabelText(/MESSAGE/i), {target: {value: ''}});  
        expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('');
        expect(screen.getByText("Message is empty")).toBeVisible();

        fireEvent.focus(screen.getByLabelText(/MESSAGE/i), {target: {value: 'test message2'}});  
        expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('test message2');
        fireEvent.focus(screen.getByLabelText(/MESSAGE/i), {target: {value: ''}});  
        expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('');
        expect(screen.getByText("Message is empty")).toBeVisible();

    });
    it("check form submit",async()=>{
        render(<Contact />);
        screen.getByRole("button").click();
        await waitFor(()=>{
            expect(screen.getByLabelText(/NAME/i)).toBeInvalid();
        })
        fireEvent.input(screen.getByLabelText(/NAME/i), {target: {value: 'test'}}); 
        screen.getByRole("button").click();
        await waitFor(()=>{
        expect(screen.getByLabelText(/NAME/i)).toBeValid();
        expect(screen.getByLabelText(/EMAIL/i)).toBeInvalid();
        });
        fireEvent.input(screen.getByLabelText(/NAME/i), {target: {value: 'test'}}); 
        fireEvent.input(screen.getByLabelText(/Email/i), {target: {value: 'test@t.c'}}); 
        screen.getByRole("button").click();
        await waitFor(()=>{
            expect(screen.getByLabelText(/NAME/i)).toBeValid();
            expect(screen.getByLabelText(/EMAIL/i)).toBeValid();
            expect(screen.getByLabelText(/MESSAGE/i)).toBeInvalid();
            fireEvent.input(screen.getByLabelText(/MESSAGE/i), {target: {value: 'test message'}}); 
        });
        screen.getByRole("button").click();
        waitFor(()=>{
            expect(screen.getByLabelText(/NAME/i).value).toEqual('');
            expect(screen.getByLabelText(/EMAIL/i).value).toEqual('');
            expect(screen.getByLabelText(/MESSAGE/i).value).toEqual('');  
        });
    })
});

