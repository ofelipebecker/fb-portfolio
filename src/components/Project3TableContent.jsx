import { useRef, useEffect, useState } from "react";

import DataTable from 'datatables.net'; 
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
    const tableRef = useRef(null);
    const dataTableRef = useRef(null);

    // eslint-disable-next-line no-unused-vars
    const [assets, setAssets] = useState(tableData);

    useEffect(() => {
        const tableOptions = {
            data: assets,
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
            scrollY: '600px',
            scrollCollapse: true,
            pageLength: 10,
        };

        if (tableRef.current && !dataTableRef.current) {
            dataTableRef.current = new DataTable(tableRef.current, {
                ...tableOptions,
                columns: [
                    { 
                        data: 'asset',
                        title: 'Ativo',
                        className: 'text-nowrap',
                    },
                    { 
                        data: 'status',
                        title: 'Status',
                        className: 'text-nowrap',
                        render: function(data) {
                            const isActive = data === 'Ativo';
                            const badgeClass = isActive ? 'success' : 'warning';
                            const displayText = isActive ? 'Ativo' : 'Inativo';
                            
                            return `
                                <span class="badge rounded-pill text-bg-${badgeClass}">
                                    ${displayText}
                                </span>
                            `;
                        },
                    },
                    { 
                        data: 'manufacturer',
                        title: 'Fabricante',
                        className: 'text-nowrap',
                    },
                    { 
                        data: 'category',
                        title: 'Categoria',
                        className: 'text-nowrap',
                    },
                    { 
                        data: 'registration',
                        title: 'Matrícula',
                        className: 'text-nowrap text-end',
                    },
                    { 
                        data: 'situation',
                        title: 'Situação',
                        className: 'text-nowrap',
                    },
                    { 
                        data: 'responsible',
                        title: 'Responsável',
                        className: 'text-nowrap',
                    },
                    { 
                        data: 'cnpj',
                        title: 'CNPJ',
                        className: 'text-nowrap text-end',
                    },
                    { 
                        data: 'company',
                        title: 'Empresa',
                        className: 'text-nowrap',
                    },
                    { 
                        title: 'Ações',
                        className: 'text-nowrap',
                        orderable: false,
                        render: function(data, type, row, meta) {
                            return `
                                <button class="btn btn-sm btn-outline-md-gray me-3" data-row="${meta.row}" data-action="edit">
                                    <span class="bi bi-pencil fs-4"></span>
                                </button>
                                <button class="btn btn-sm btn-outline-md-gray me-3" data-row="${meta.row}" data-action="toggle">
                                    <span class="bi bi-toggle-on fs-4"></span>
                                </button>
                                <button class="btn btn-sm btn-outline-danger" data-row="${meta.row}" data-action="delete">
                                    <span class="bi bi-trash3 fs-4"></span>
                                </button>
                            `;
                        },
                    }
                ],
                buttons: [
                    {
                        className: 'btn btn-lg btn-outline-secondary',
                        extend: 'colvis',
                        text: 'Gerenciar Colunas',
                        columns: ':not(:first):not(:last)',
                    }
                ],
                fixedColumns: {
                    left: 1,
                    right: 1,
                }
            });
        }
        
        return () => {
            if (dataTableRef.current) {
                dataTableRef.current.destroy();
                dataTableRef.current = null;
            }
        };
    }, [assets]);

    return (
        <table 
            ref={tableRef} 
            className="table table-hover"
        >
        </table>
    );
};

export default Project3TableContent;
