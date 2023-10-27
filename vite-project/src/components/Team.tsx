function Team() {


    return (
        <>
            <h4>Jogadores:</h4>
            <select>
                <option value="opcao1">Arrascaeta</option>
                <option value="opcao2">Bruno Henrrique</option>
                <option value="opcao3">Gabigol</option>
                <option value="opcao4">Pedro</option>
                <option value="opcao5">David Luiz</option>
                <option value="opcao6">Felipe Luiz</option>
                <option value="opcao7">Wesley</option>
                <option value="opcao8">Gerson</option>
            </select>
            <br /><br />

            <label htmlFor="mensagem">
                Escreva sua mensagem:
                <textarea name="" id="mensagem" />
            </label>

            <br /><br />

            <table>
                <thead>
                    <tr>
                        <th>Jogador</th>
                        <th>Gols</th>
                        <th>Assistências</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gabigol</td>
                        <td>10</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Bruno Henrique</td>
                        <td>8</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Arrascaeta</td>
                        <td>6</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Gerson</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Everton Ribeiro</td>
                        <td>4</td>
                        <td>8</td>
                    </tr>
                </tbody>
            </table>


        </>
    );
}

export default Team;