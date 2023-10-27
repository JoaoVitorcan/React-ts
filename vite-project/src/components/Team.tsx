import {data_2} from "../Data"



function Team() {
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
                    {data_2.map((team) => (
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

export default Team;
