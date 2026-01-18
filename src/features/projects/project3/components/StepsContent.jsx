import ImageCarousel from "../../components/ImageCarousel";
import SingleFigure from "../../../../components/SingleFigure";
import SingleFigureModal from "../../../../components/SingleFigureModal";

import DemoTable from "./DemoTable";

import imageVCXT02 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-2.png";
import imageVCXT031 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-3-1.png";
import imageVCXT032 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-3-2.png";
import imageVCXT033 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-3-3.png";
import imageVCXT04 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-4.png"
import imageVCXT05 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-5.png";
import imageVCXT071 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-1.png";
import imageVCXT072 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-2.png";
import imageVCXT073 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-3.png";
import imageVCXT074 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-4.png";
import imageVCXT075 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-5.png";
import imageVCXT076 from "../../../../assets/images/proj-vcx-tables/proj-vcx-tables-7-6.png";

const imagesVCXT03 = [imageVCXT031, imageVCXT032, imageVCXT033];

const imagesVCXT07 = [
    imageVCXT071, 
    imageVCXT072, 
    imageVCXT073, 
    imageVCXT074, 
    imageVCXT075, 
    imageVCXT076
];

export const StepsContent = [
    ({ captions='' }) => (
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
                src={imageVCXT02} 
                alt={captions[0]}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='' }) => (
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
                images={imagesVCXT03}
                captions={captions}
            />
        </>
    ),
    ({ captions='' }) => (
        <>
            <p className="my-4">
                Adicionei ao VC-X Sonar ferramentas para gerar mapas de calor. 
                Inicialmente, usei o Matomo e, posteriormente, o Hotjar. Com essas 
                ferramentas, pude fazer análises de mapas de cliques, de movimentação de
                mouse e também de scroll.
            </p>
            <SingleFigureModal
                modalId="vcxt-04-modal"
                imageSrc={imageVCXT04}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='' }) => (
        <>
            <p className="mt-4">
                A seguir, trabalhei em alguns desenhos à mão de alternativas para o novo 
                padrão das tabelas.
            </p>
            <SingleFigure 
                src={imageVCXT05} 
                alt={captions[0]}
                caption={captions[0]}
            />
        </>
    ),
    ({ captions='' }) => (
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
    ({ captions='' }) => (
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
                captions={captions}
            />
        </>
    ),
    ({ captions='' }) => (
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
