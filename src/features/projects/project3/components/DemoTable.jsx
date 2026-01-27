import { useRef, useEffect } from 'react';

import DataTable from 'datatables.net';
import DT from 'datatables.net-bs5';
import FixedColumns from 'datatables.net-fixedcolumns';
import Buttons from 'datatables.net-buttons';

import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-bs5/css/dataTables.bootstrap5.css';
import 'datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.css';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.css';

import { demoTableData } from '../data/demoTableData';

DataTable.use(DT);
DataTable.use(FixedColumns);
DataTable.use(Buttons);

const DemoTable = () => {
  const domTableRef = useRef(null);
  const dataTablesInstanceRef = useRef(null);
  const tableModalRef = useRef(null);

  useEffect(() => {
    const tableOptions = {
      data: demoTableData,
      language: {
        decimal: '',
        emptyTable: 'Nenhum registro disponível na tabela',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        infoEmpty: 'Mostrando 0 a 0 de 0 registros',
        infoFiltered: '(filtrado de _MAX_ registros totais)',
        infoPostFix: '',
        thousands: ',',
        lengthMenu: '_MENU_ resultados',
        loadingRecords: 'Carregando...',
        processing: 'Processando...',
        search: 'Pesquisar',
        zeroRecords: 'Nenhum registro correspondente encontrado',
        paginate: {
          first: 'Primeira',
          last: 'Última',
          next: 'Próxima',
          previous: 'Anterior',
        },
        aria: {
          sortAscending: ': ativar para ordenar coluna ascendente',
          sortDescending: ': ativar para ordenar coluna descendente',
        },
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
                  data-bs-target="#table-modal"
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
                  data-bs-target="#table-modal"
                  data-row="${meta.row}"
                  data-asset-name="${row.asset}"
                  data-action="delete"
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
          },
        ],
        fixedColumns: {
          left: 1,
          right: 1,
        },
      });
    }

    return () => {
      const dataTable = dataTablesInstanceRef.current;

      if (dataTable) {
        dataTable.destroy();
        dataTablesInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const currentModal = tableModalRef.current;
    if (!currentModal) return;

    const handleModalOpen = (event) => {
      if (!dataTablesInstanceRef.current) return;

      const button = event.relatedTarget;
      const action = button.getAttribute('data-action');
      const rowIndex = button.getAttribute('data-row');
      const assetName = button.getAttribute('data-asset-name');

      const confirmBtn = document.getElementById('confirm-action-btn');
      const nameSpan = document.getElementById('asset-name');
      const newStatusContainer = document.getElementById(
        'new-status-container',
      );
      const newStatusSpan = document.getElementById('new-status-value');
      const modalTitle = document.getElementById('modal-title');

      confirmBtn.onclick = null;

      nameSpan.textContent = assetName;
      confirmBtn.dataset.rowIndex = rowIndex;
      confirmBtn.dataset.action = action;

      if (action === 'toggle') {
        const currentStatus = button.getAttribute('data-current-status');
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        const newStatusText = newStatus === 'active' ? 'Ativo' : 'Inativo';
        const currentStatusText =
          currentStatus === 'active' ? 'Ativo' : 'Inativo';

        newStatusContainer.classList.remove('d-none');
        newStatusSpan.textContent = `${currentStatusText} → ${newStatusText}`;

        modalTitle.textContent = 'Deseja alterar o status do ativo?';
        confirmBtn.textContent = 'Confirmar Alteração';
        confirmBtn.className = 'btn btn-lg btn-primary';
        confirmBtn.dataset.currentStatus = currentStatus;
        confirmBtn.dataset.newStatus = newStatus;

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
      } else if (action === 'delete') {
        newStatusContainer.classList.add('d-none');

        modalTitle.textContent = 'Deseja excluir o ativo?';
        confirmBtn.textContent = 'EXCLUIR ATIVO';
        confirmBtn.className = 'btn btn-lg btn-danger';

        confirmBtn.onclick = () => {
          const dataTable = dataTablesInstanceRef.current;
          if (!dataTable) return;

          dataTable.row(parseInt(rowIndex)).remove().draw();
        };
      }
    };

    currentModal.addEventListener('show.bs.modal', handleModalOpen);

    return () => {
      if (currentModal) {
        currentModal.removeEventListener('show.bs.modal', handleModalOpen);
      }
    };
  }, []);

  return (
    <>
      <table ref={domTableRef} className='table table-hover'></table>
      <div
        ref={tableModalRef}
        className='modal fade'
        id='table-modal'
        tabIndex='-1'
        aria-hidden='true'
      >
        <div className='modal-dialog mt-10'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title fs-2' id='modal-title'>
                Confirmar
              </h4>
              <button className='btn-close' data-bs-dismiss='modal'></button>
            </div>
            <div className='modal-body'>
              <p>
                <b>Ativo: </b>
                <span id='asset-name'></span>
              </p>
              <p id='new-status-container' className='d-none'>
                <b>Novo status: </b>
                <span id='new-status-value'></span>
              </p>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-lg btn-outline-secondary me-3'
                data-bs-dismiss='modal'
              >
                Cancelar
              </button>
              <button
                className='btn btn-lg'
                id='confirm-action-btn'
                data-bs-dismiss='modal'
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoTable;
