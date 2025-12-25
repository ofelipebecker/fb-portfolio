import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import FixedColumns from 'datatables.net-fixedcolumns';
import Buttons from 'datatables.net-buttons';

import 'datatables.net-buttons/js/buttons.colVis.mjs';

import { tableData } from '../data/projects/project3TableData';

import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.css';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.css';

DataTable.use(DT);
DataTable.use(FixedColumns);
DataTable.use(Buttons);

const Project3TableContent = () => {
    const options = {
        buttons: [
            {
                className: 'btn btn-lg btn-outline-secondary',
                extend: 'colvis',
                text: 'Gerenciar Colunas',
                columns: ':not(:first):not(:last)'
            }
        ],
        fixedColumns: {
            left: 1,
            right: 1,
        },
        language: {
            'decimal': '',
            'emptyTable': 'Nenhum registro disponível na tabela',
            'info': 'Mostrando _START_ a _END_ de _TOTAL_ registros',
            'infoEmpty': 'Mostrando 0 a 0 de 0 registros',
            'infoFiltered': '(filtrado de _MAX_ registros totais)',
            'infoPostFix': '',
            'thousands': ',',
            'lengthMenu': '_MENU_ resultados',
            'loadingRecords': 'Carregando...',
            'processing': 'Processando...',
            'search': 'Pesquisar',
            'zeroRecords': 'Nenhum registro correspondente encontrado',
            'paginate': {
                'first': 'Primeira',
                'last': 'Última',
                'next': 'Próxima',
                'previous': 'Anterior'
            },
            'aria': {
                'sortAscending': ': ativar para ordenar coluna ascendente',
                'sortDescending': ': ativar para ordenar coluna descendente'
            }
        },
        layout: {
            topStart: ['pageLength', 'buttons'],
            topEnd: 'search',
            bottomStart: 'info',
            bottomEnd: 'paging',
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
                    <th className="text-end">Matrícula</th>
                    <th>Situação</th>
                    <th>Responsável</th>
                    <th className="text-end">CNPJ</th>
                    <th>Empresa</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td className="text-nowrap">{item.asset}</td>
                        <td className="text-nowrap">
                            <span className={`badge rounded-pill text-bg-${item.status === "Ativo" ? "success" : "warning"}`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="text-nowrap">{item.manufacturer}</td>
                        <td className="text-nowrap">{item.category}</td>
                        <td className="text-nowrap text-end">{item.registration}</td>
                        <td className="text-nowrap">{item.situation}</td>
                        <td className="text-nowrap">{item.responsible}</td>
                        <td className="text-nowrap text-end">{item.cnpj}</td>
                        <td className="text-nowrap">{item.company}</td>
                        <td className="text-nowrap">
                            <button className="btn btn-sm btn-outline-md-gray me-3">
                                <span className="bi bi-pencil fs-4"></span>
                            </button>
                            <button className="btn btn-sm btn-outline-md-gray me-3">
                                <span className="bi bi-toggle-on fs-4"></span>
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                                <span className="bi bi-trash3 fs-4"></span>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </DataTable>
    );
};

export default Project3TableContent;
