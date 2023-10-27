import { render, screen } from '@testing-library/react';
import Team from './components/Team';

test('Verifica se os elementos estão presentes no componente Team', () => {
    render(<Team />);

    // Verifica se o título está presente
    const titleElement = screen.getByText(/Jogadores:/i);
    expect(titleElement).toBeInTheDocument();

    // Verifica se o select está presente
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Verifica se a textarea está presente
    const textareaElement = screen.getByLabelText(/Escreva sua mensagem:/i);
    expect(textareaElement).toBeInTheDocument();

    // Verifica se a tabela está presente
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
});