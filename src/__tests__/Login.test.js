import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../components/Login';

describe('Login Page', () => {
    test('Should display the title with the value of', () => {
        render(<Login />);
        expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();  
    })
    test('Should have 2 input fields', () => {
        render(<Login />);
        expect(screen.getByRole('textbox', {placeholder: /username/i})).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    })
    test('Should have a Login Button', () => {
        render(<Login />);
        expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    })
    test('Should have a register link', () => {
        render(<Login />);
        expect(screen.getByRole('link', {name: /registre-se/i})).toBeInTheDocument();
    })
})
