import { useRef, useEffect } from "react";

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
    const domTableRef = useRef(null);
    const dataTablesInstanceRef = useRef(null);
    const modalRef = useRef(null);
    const toggleStatusModalRef = useRef(null);

    useEffect(() => {
        const tableOptions = {
            data: tableData,
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

        const domTableElement = domTableRef.current;

        if (domTableElement && !dataTablesInstanceRef.current) {
            dataTablesInstanceRef.current = new DataTable(domTableElement, {
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
                        render: (data) => {
                            const isActive = data === 'active';
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
                        render: (_data, _type, row, meta) => {
                            const toggleIcon = row.status === 'active' ? 'on' : 'off';

                            return `
                                <button 
                                    class="btn btn-sm btn-outline-md-gray me-3"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#toggle-status-modal"
                                    data-row="${meta.row}"
                                    data-action="toggle"
                                    data-asset-name="${row.asset}"
                                    data-current-status="${row.status}"
                                >
                                    <span class="bi bi-toggle-${toggleIcon} fs-4"></span>
                                </button>
                                <button 
                                    class="btn btn-sm btn-outline-danger" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#delete-asset-modal"
                                    data-row="${meta.row}"
                                    data-asset-name="${row.asset}"
                                >
                                    <span class="bi bi-trash3 fs-4"></span>
                                </button>
                            `;
                        },
                    },
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
                },
            });
        };
        
        return () => {
            const dataTable = dataTablesInstanceRef.current;
            
            if (dataTable) {                
                dataTable.destroy();
                dataTablesInstanceRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const currentModal = modalRef.current;
        if (!currentModal) return;
        
        const handleModalOpen = (event) => {
            if (!dataTablesInstanceRef.current) return;

            const button = event.relatedTarget;
                        
            const rowIndex = button.getAttribute('data-row');
            const assetName = button.getAttribute('data-asset-name');
            const confirmBtn = document.getElementById('confirm-delete-btn');
            const nameSpan = document.getElementById('asset-name');
            
            nameSpan.textContent = assetName;
            
            confirmBtn.onclick = () => {
                dataTablesInstanceRef.current.row(parseInt(rowIndex)).remove().draw();
            };
        };
        
        currentModal.addEventListener('show.bs.modal', handleModalOpen);
        
        return () => {
            if (currentModal) {
                currentModal.removeEventListener('show.bs.modal', handleModalOpen);
            }
        };
    }, []);

    useEffect(() => {
        const currentToggleStatusModal = toggleStatusModalRef.current;
        if (!currentToggleStatusModal) return;
        
        const handleModalOpen = (event) => {
            if (!dataTablesInstanceRef.current) return;

            const button = event.relatedTarget;
                        
            const rowIndex = button.getAttribute('data-row');
            const assetName = button.getAttribute('data-asset-name');
            const currentStatus = button.getAttribute('data-current-status');
            const confirmBtn = document.getElementById('confirm-toggle-status-btn');
            const nameSpan = document.getElementById('status-asset-name');
            const newStatusSpan = document.getElementById('new-status-value');
            
            const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
            const newStatusText = newStatus === 'active' ? 'Ativo' : 'Inativo';
            const currentStatusText = currentStatus === 'active' ? 'Ativo' : 'Inativo';
            
            nameSpan.textContent = assetName;
            newStatusSpan.textContent = `${currentStatusText} → ${newStatusText}`;
            
            confirmBtn.onclick = () => {
                const dataTable = dataTablesInstanceRef.current;
                if (!dataTable) return;
                
                const rowIndexNum = parseInt(rowIndex);
                const rowData = dataTable.row(rowIndexNum).data();
                
                const newStatus = rowData.status === 'active' ? 'inactive' : 'active';
                
                const updatedData = { ...rowData, status: newStatus };
                dataTable.row(rowIndexNum).data(updatedData);
                
                const rowNode = dataTable.row(rowIndexNum).node();
                if (rowNode) {
                    const toggleBtn = rowNode.querySelector('[data-action="toggle"]');
                    if (toggleBtn) {
                        toggleBtn.setAttribute('data-current-status', newStatus);
                        const iconSpan = toggleBtn.querySelector('span');
                        if (iconSpan) {
                            iconSpan.className = `bi bi-toggle-${newStatus === 'active' ? 'on' : 'off'} fs-4`;
                        }
                    }
                }
                
                dataTable.draw(false);
            };
        };
        
        currentToggleStatusModal.addEventListener('show.bs.modal', handleModalOpen);
        
        return () => {
            if (currentToggleStatusModal) {
                currentToggleStatusModal.removeEventListener('show.bs.modal', handleModalOpen);
            }
        };
    }, []);

    return (
        <>
            <table 
                ref={domTableRef} 
                className="table table-hover"
            >
            </table>
            <div 
                ref={modalRef}
                className="modal fade" 
                id="delete-asset-modal" 
                tabIndex="-1" 
                aria-hidden="true"
            >
                <div className="modal-dialog mt-10">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fs-2">Deseja excluir o ativo?</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                <b>Ativo: </b>
                                <span id="asset-name"></span>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn btn-lg btn-outline-secondary me-3" 
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn btn-lg btn-danger"
                                id="confirm-delete-btn"
                                data-bs-dismiss="modal"
                            >
                                EXCLUIR ATIVO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                ref={toggleStatusModalRef}
                className="modal fade" 
                id="toggle-status-modal" 
                tabIndex="-1" 
                aria-hidden="true"
            >
                <div className="modal-dialog mt-10">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title fs-2">Deseja alterar o status do ativo?</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                <b>Ativo: </b>
                                <span id="status-asset-name"></span>
                            </p>
                            <p>
                                <b>Novo status: </b>
                                <span id="new-status-value"></span>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn btn-lg btn-outline-secondary me-3" 
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn btn-lg btn-primary"
                                id="confirm-toggle-status-btn"
                                data-bs-dismiss="modal"
                            >
                                Confirmar Alteração
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project3TableContent;
