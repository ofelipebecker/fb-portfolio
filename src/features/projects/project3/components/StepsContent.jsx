import ImageCarousel from "../../components/ImageCarousel";
import SingleFigure from "../../../../components/SingleFigure";
import SingleFigureModal from "../../../../components/SingleFigureModal";

import DemoTable from "./DemoTable";

export const StepsContent = [
    ({ captions='', images }) => (
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
            <SingleFigure 
                image={images[0]} 
                alt={captions[0]}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='', images }) => (
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
            <ImageCarousel 
                id="vcxt-03"
                images={images}
                captions={captions}
            />
        </>
    ),
    ({ captions='', images }) => (
        <>
            <p className="my-4">
                Adicionei ao VC-X Sonar ferramentas para gerar mapas de calor. 
                Inicialmente, usei o Matomo e, posteriormente, o Hotjar. Com essas 
                ferramentas, pude fazer análises de mapas de cliques, de movimentação de
                mouse e também de scroll.
            </p>
            <SingleFigureModal
                modalId="vcxt-04-modal"
                image={images[0]}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='', images }) => (
        <>
            <p className="mt-4">
                A seguir, trabalhei em alguns desenhos à mão de alternativas para o novo 
                padrão das tabelas.
            </p>
            <SingleFigure 
                image={images[0]} 
                alt={captions[0]}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='', images }) => (
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
    ({ captions='', images }) => (
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
                images={images}
                captions={captions}
            />
        </>
    ),
    ({ captions='', images }) => (
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
