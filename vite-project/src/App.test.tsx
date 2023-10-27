import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se o título principal é h1 e contém o texto correto', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /Tudo sobre o flamengo/i });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
});

test('Verifica se o subtítulo é h2 e contém o texto correto', () => {
    render(<App />);
    const subtitleElement = screen.getByRole('heading', { level: 2, name: /O maior time do MUNDO!/i });
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe('H2');
});

test('Verifica se existe um campo de texto para "Time"', () => {
    render(<App />);
    const inputTime = screen.getByLabelText('Time:');
    expect(inputTime).toBeInTheDocument();
    expect(inputTime).toHaveAttribute('type', 'text');
});

test('Verifica se existe um campo de número para "Gols"', () => {
    render(<App />);
    const inputGols = screen.getByLabelText('Gols:');
    expect(inputGols).toBeInTheDocument();
    expect(inputGols).toHaveAttribute('type', 'number');
});

test('Verifica a quantidade de labels(campos)', () => {
    render(<App />);
    const labels = screen.getAllByLabelText(/:/i);
    expect(labels.length).toBe(2);
});

test('Verifica se existe um botão "Flamengo" e simula o clique', async () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Flamengo/i });
    expect(buttonElement).toBeInTheDocument();

    await userEvent.click(buttonElement);
    const outputElement = screen.getByText(/VAI FLAMENGO!/i);
    expect(outputElement).toBeInTheDocument();

    await userEvent.click(buttonElement);

    // Agora, em vez de verificar por um texto vazio, podemos verificar se o elemento não está presente
    const outputElement2 = screen.queryByText(/VAI FLAMENGO!/i);
    expect(outputElement2).not.toBeInTheDocument();
});



