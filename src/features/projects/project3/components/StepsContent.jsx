import ImageCarousel from "../../../../components/ImageCarousel";
import SingleImageModal from "../../../../components/SingleImageModal";

import DemoTable from "./DemoTable";

import imageVCXT04 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-4.png"
import imageVCXT071 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-1.png";
import imageVCXT072 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-2.png";
import imageVCXT073 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-3.png";
import imageVCXT074 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-4.png";
import imageVCXT075 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-5.png";
import imageVCXT076 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-6.png";

const imagesVCXT07 = [
    {
        src: imageVCXT071,
        caption: "Exemplo de implementação realizada: tabela de Relatório de Detalhamento por acesso.",
    },
    {
        src: imageVCXT072,
        caption: `
            Exemplo de implementação realizada: tabelas de Ativos Vinculados e de Licenças Vinculadas.
        `,
    },
    {
        src: imageVCXT073,
        caption: `
            Exemplo de implementação realizada: tabela do tipo 'condensada' de Informações de Fatura.
        `,
    },
    {
        src: imageVCXT074,
        caption: `
            Exemplo de implementação realizada: tabela de Arquivos Aceitos para Processamento de Fatura
            de Acordo com Operadora. Tabela do tipo 'condensada', localizada dentro de um accordion do
            Bootstrap.
        `,
    },
    {
        src: imageVCXT075,
        caption: `
            Exemplo de implementação realizada: tabela de Relatório Mensal de Processamento de Faturas.
            Seguindo o padrão visual definido, está tabela foi implementada em MJML, para ser enviada 
            aos usuários por e-mail.
        `,
    },
    {
        src: imageVCXT076,
        caption: "Exemplo de implementação realizada: tabela de Acessos por Empresa.",
    },
];

export const StepsContent = [
    () => (
        <>
            <p className="my-4">
                Eu pesquisei artigos e documentos sobre design de tabelas, para 
                encontrar boas referências e práticas já consagradas e testadas para 
                seguir.
            </p>
            <ul className="mb-5">
                <li>
                    <a href="https://m2.material.io/components/data-tables">
                        Material Design Data Tables
                    </a>
                </li>
                <li>
                    <a href="https://uxdesign.cc/data-table-for-enterprise-ux-cb48fb9fdf1e">
                        Artigo "Designing better data tables for enterprise UX", de 
                        Lalatendu Satpathy.
                    </a>
                </li>
                <li>
                    <a href="https://taras-bakusevych.medium.com/data-tables-design-3c705b106a64">
                        Artigo "Data Tables Design", de Taras Bakusevych.
                    </a>
                </li>
            </ul>
        </>
    ),
    () => (
        <>
            <p className="my-4 text-nowrap">
                Eu fiz uma análise de usabilidade das tabelas seguindo o método da&nbsp;
                <a 
                    href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                    rel="noreferrer"
                    target="_blank"
                    title="Abrir em nova aba."
                >
                    avaliação heurística
                </a>
                &nbsp;de Nielsen.
            </p>
        </>
    ),
    () => (
        <>
            <p className="my-4">
                Adicionei ao VC-X Sonar ferramentas para gerar mapas de calor. 
                Inicialmente, usei o Matomo e, posteriormente, o Hotjar. Com essas 
                ferramentas, pude fazer análises de mapas de cliques, de movimentação de
                mouse e também de scroll.
            </p>
            <SingleImageModal
                modalId = "vcxt-04-modal"
                imageSrc={imageVCXT04}
                caption = "Exemplo de mapa de calor de movimentações de mouse do usuário, na tabela de Faturas."
            />
        </>
    ),
    () => (
        <>
            <p className="mt-4">
                A seguir, trabalhei em alguns desenhos à mão de alternativas para o novo 
                padrão das tabelas.
            </p>
        </>
    ),
    () => (
        <>
            <p className="mt-4">
                Tendo feito a pesquisa e análise do estado atual, defini princípios de 
                design para as tabelas do Sonar. Alguns desses princípios são:
            </p>
            <ul className="pl-4">
                <li className="mb-2">
                    A informação base da tabela deve estar na primeira coluna da tabela.
                </li>
                <li className="mb-2">
                    Nas tabelas que contém a coluna de "Status", esta coluna deve ser a 
                    segunda.
                </li>
                <li className="mb-2">
                    Alinhamento: conteúdos predominantemente textuais devem ser 
                    alinhados à esquerda e conteúdos predominantemente numéricos devem 
                    ser alinhados à direita.
                </li>
                <li>
                    Os cabeçalhos das colunas devem estar sempre visíveis.
                </li>
            </ul>
        </>
    ),
    () => (
        <>
            <p className="mt-4">
                Tendo um padrão de design das tabelas definido, demos início ao processo 
                de implementação, utilizando a biblioteca DatatablesJS (e seus diversos 
                plugins) e Bootstrap. Também, foram implementadas tabelas especiais, 
                seguindo o mesmo padrão, porém desenvolvidas através de MJML, para envio por 
                e-mail.
            </p>
            <ImageCarousel 
                id="vcxt-07"
                images={imagesVCXT07}
            />
        </>
    ),
    () => (
        <>
            <p className="my-4">
                Para demonstrar na prática as funcionalidades implementadas, desenvolvi esta 
                tabela de exemplo utilizando DataTables.js. Embora os dados sejam fictícios 
                e sigam um padrão de anonimização (CNPJs e nomes gerados para demonstração), 
                todas as funcionalidades de interação replicam o padrão estabelecido para as 
                tabelas do VC-X Sonar.
            </p>
            <div className="mt-5">
                <DemoTable />
            </div>
        </>
    ),
];
