import {data} from "../Data"



function Table() {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <th>
                        Time
                    </th>
                    <th>
                        Pontos
                    </th>
                    <th>
                        Vitórias
                    </th>
                    <th>
                        Derrotas
                    </th>
                    <th>
                        Empates
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Flamengo
                        </td>
                        <td>
                            90
                        </td>
                        <td>
                            30
                        </td>
                        <td>
                            0
                        </td>
                        <td>
                            0
                        </td>
                    </tr> 
                    {data.map((team) => (
                        <tr>
                            <td>
                                {team.time}
                            </td>
                            <td>
                                {team.pontos}
                            </td>
                            <td>
                                {team.vitorias}
                            </td>
                            <td>
                                {team.derrotas}
                            </td>
                            <td>
                                {team.empates}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )

}

export default Table
