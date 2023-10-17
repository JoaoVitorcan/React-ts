import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

it('Check if the email field exists', () => {
    render(<App />)
    const inputEmail = screen.getByLabelText(/email:/i)
    expect(inputEmail).toBeInTheDocument()
    expect(inputEmail).toHaveProperty('type', 'email')
})

it('Check if there are two buttons', () => {
    render(<App />)
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(2)
})

it('Check if there is a button with id', () => {
    render(<App />)
    const buttonid = screen.getByTestId('id-send')
    expect(buttonid).toBeInTheDocument()
})

it('Check if there is a return button', () =>{
    render(<App />)
    const buttonBack = screen.getByRole('button', {name: /voltar/i})
    expect(buttonBack).toBeInTheDocument()
})

it('Check field email and send button', async () => {
 render(<App />)
 const inputEmail = screen.getByLabelText(/email:/i)
 const buttonid = screen.getByTestId('id-send')
 const title = screen.getByRole('heading', {name: /valor/i})

 const mockinput = '@email.com' 

 await userEvent.type(inputEmail, mockinput)
 await userEvent.click(buttonid)
 expect(inputEmail).toHaveValue('') 
 expect(title).toHaveTextContent(`Valor: ${mockinput}`)	
})