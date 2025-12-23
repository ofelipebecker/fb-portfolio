import { tableData } from '../data/projects/project3TableData';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

DataTable.use(DT);

const Project3TableContent = () => {
    return (
        <DataTable>
            <thead>
                <tr>
                    <th>Ativo</th>
                    <th>Status</th>
                    <th>Fabricante</th>
                    <th>Categoria</th>
                    <th>Matrícula</th>
                    <th>Situação</th>
                    <th>Responsável</th>
                    <th>CNPJ</th>
                    <th>Empresa</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.ativo}</td>
                        <td>
                            <span className={`badge rounded-pill text-bg-${item.status === "Ativo" ? "success" : "warning"}`}>
                                {item.status}
                            </span>
                        </td>
                        <td>{item.fabricante}</td>
                        <td>{item.categoria}</td>
                        <td>{item.matricula}</td>
                        <td>{item.situacao}</td>
                        <td>{item.responsavel}</td>
                        <td>{item.cnpj}</td>
                        <td>{item.empresa}</td>
                        <td><button className="btn btn-danger">Excluir</button></td>
                    </tr>
                ))}
            </tbody>
        </DataTable>
    );
};

export default Project3TableContent;
