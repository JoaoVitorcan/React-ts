import {render, screen} from "@testing-library/react";
import App from "./App";

it('Check if the email field exists', () => {
    render(<App/>)
const inputEmail = screen.getByLabelText(/email/i)   
expect(inputEmail).toBeInTheDocument() 
expect(inputEmail).toHaveProperty('type', 'email')
})

it('Check if there are two buttons', () => {
    render(<App/>)
const button = screen.getAllByRole('button')
expect(button).toHaveLength(2)
})
