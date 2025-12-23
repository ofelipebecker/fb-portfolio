import { tableData } from '../data/projects/project3TableData';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';

DataTable.use(DT);

const Project3TableContent = () => {
    const options = {
        language: {
            "decimal": "",
            "emptyTable": "Nenhum registro disponível na tabela",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 a 0 de 0 registros",
            "infoFiltered": "(filtrado de _MAX_ registros totais)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Carregando...",
            "processing": "Processando...",
            "search": "Pesquisar",
            "zeroRecords": "Nenhum registro correspondente encontrado",
            "paginate": {
                "first": "Primeira",
                "last": "Última",
                "next": "Próxima",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": ativar para ordenar coluna ascendente",
                "sortDescending": ": ativar para ordenar coluna descendente"
            }
        },
        scrollX: true,
        scrollY: true,
    };

    return (
        <DataTable
            className="table table-hover"
            options={options}
        >
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
                        <td className="text-nowrap">{item.ativo}</td>
                        <td className="text-nowrap">
                            <span className={`badge rounded-pill text-bg-${item.status === "Ativo" ? "success" : "warning"}`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="text-nowrap">{item.fabricante}</td>
                        <td className="text-nowrap">{item.categoria}</td>
                        <td className="text-nowrap">{item.matricula}</td>
                        <td className="text-nowrap">{item.situacao}</td>
                        <td className="text-nowrap">{item.responsavel}</td>
                        <td className="text-nowrap">{item.cnpj}</td>
                        <td className="text-nowrap">{item.empresa}</td>
                        <td className="text-nowrap"><button className="btn btn-danger">Excluir</button></td>
                    </tr>
                ))}
            </tbody>
        </DataTable>
    );
};

export default Project3TableContent;
