// VC-X Dashboard
import mainImage from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-1.png";
import image1STCardTabs from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-5-1-bs-tabs.png";
import image1STCardChart from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-5-2-chart.png";
import imageHeatmap from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-3-heatmap.jpg";
import imageOtherCardsTabsAndCharts from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-7-other-charts-tabs.png";
import imageOtherCardsTables from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-8-other-charts-tables.png";
import imagePeriodSelector from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-6-period-selector.png";
import imageSketch from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-4-sketch-1.jpg";
import imageS2 from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-2-0.png";

// Cities & Bikes
import imageCTB01 from "../assets/images/proj-ctb/proj-ctb-01.png";
import imageCTB02 from "../assets/images/proj-ctb/proj-ctb-02.png";
import imageCTB03 from "../assets/images/proj-ctb/proj-ctb-03.png";
import imageCTB03B from "../assets/images/proj-ctb/proj-ctb-03b.png";
import imageCTB0401 from "../assets/images/proj-ctb/proj-ctb-04-01.png";
import imageCTB06 from "../assets/images/proj-ctb/proj-ctb-06.png";
import imageCTB0701 from "../assets/images/proj-ctb/proj-ctb-07-01.png";
import imageCTB08 from "../assets/images/proj-ctb/proj-ctb-08.png";
import imageCTB09 from "../assets/images/proj-ctb/proj-ctb-09.png";
import imageCTB10 from "../assets/images/proj-ctb/proj-ctb-10.png";
import imageCTB11 from "../assets/images/proj-ctb/proj-ctb-11.png";
import imageCTB12 from "../assets/images/proj-ctb/proj-ctb-12.png";
import imageCTB13 from "../assets/images/proj-ctb/proj-ctb-13.png";
import imageCTB14 from "../assets/images/proj-ctb/proj-ctb-14.png";
import imageCTB15 from "../assets/images/proj-ctb/proj-ctb-15.png";
import imageCTB16 from "../assets/images/proj-ctb/proj-ctb-16.png";
import imageCTB17 from "../assets/images/proj-ctb/proj-ctb-17.png";
import imageCTB18 from "../assets/images/proj-ctb/proj-ctb-18.png";
import imageCTB19 from "../assets/images/proj-ctb/proj-ctb-19.png";
import imageCTB20 from "../assets/images/proj-ctb/proj-ctb-20.png";
import imageCTB2001SM from "../assets/images/proj-ctb/proj-ctb-20-01-sm.png";

// VC-X Tables
import imageVCXT01 from "../assets/images/proj-vcx-tables/proj-vcx-tables-1.png";
import imageVCXT02 from "../assets/images/proj-vcx-tables/proj-vcx-tables-2.png";
import imageVCXT03 from "../assets/images/proj-vcx-tables/proj-vcx-tables-3.png";

const projects = {
    project1: {
        title: "Painel Geral do VC-X Sonar",
        caption: `
            Cards do Painel Geral, com gráficos da Chart.js, abas do Bootstrap e
            seletores de período da Day.js.
        `,
        image: mainImage,
        intro: `
            O VC-X Sonar é uma plataforma que visa descomplicar a automação, aquisição e 
            gestão de telecom e TI para empresas, gerando visão, controle e economia. 
            O projeto do novo painel geral do software tem como objetivo expor de maneira 
            simplificada e interativa informações úteis sobre consumo, custos e recursos 
            de Telecom e TI dos clientes. Meu papel foi de designer e desenvolvedor front-end.
        `,
        steps: [
            {
                title: "Pesquisa e Análise",
                subtitle: "Briefing",
                content: (
                    <>
                        <p className="my-4">
                            No começo do projeto, escrevi uma descrição básica
                            do problema e listei brevemente as atividades que
                            seriam realizadas. Conversei com o CTO e o Head da
                            equipe para que ajudassem nessa descrição.
                        </p>
                        <blockquote className="blockquote px-5 mb-0">
                            <p className="my-4">
                                <em>
                                    [...] a primeira tela a aparecer, o Painel
                                    Telecom pode ser interpretado como um painel
                                    geral, fazendo com que só sejam vistas
                                    informações de um módulo e “escondendo” as
                                    informações dos outros módulos. Foi relatado
                                    inclusive que clientes comentaram que não
                                    tinham percebido a existência dos outros
                                    painéis.
                                </em>
                            </p>
                            <p>
                                <em>
                                    Outro ponto levantado por clientes internos
                                    foi que atualmente os painéis apresentam
                                    informações em períodos de tempo curto (por
                                    mês). Por consequência há uma dificuldade de
                                    enxergar dados de períodos mais longos e
                                    fazer comparações entre períodos (ex:
                                    diferenças entre os meses ao longo de um
                                    ano).
                                </em>
                            </p>
                            <footer className="blockquote-footer">
                                Trecho da descrição básica do problema.
                            </footer>
                        </blockquote>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Análise de Similares",
                content: (
                    <>
                        <p className="my-4">
                            Nesta etapa, eu pesquisei e avaliei sete softwares
                            web que contém dashboards, considerados como
                            concorrentes do VC-X Sonar ou que tenham alguma
                            similaridade, mesmo sendo de outros segmentos. A
                            etapa tinha como objetivo buscar boas referências e
                            possíveis oportunidades para a organização de
                            conteúdo e funcionalidades para o dashboard. Os
                            softwares analisados foram: Google Analytics, Conta
                            Azul, Conta Mínima, Meu Dinheiro Invest, Mobills,
                            Quick Books e Sistema Soma.
                        </p>
                    </>
                ),
                image: [imageS2],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Entrevistas com Stakeholders",
                content: (
                    <>
                        <p className="my-4">
                            Posteriormente, entrevistei quatro clientes internos
                            que têm contato direto com clientes. A ideia desta
                            etapa era colher feedbacks que eles receberam de
                            clientes a respeito do VC-X Sonar e também ter uma
                            noção melhor sobre a visão de cada um sobre as
                            informações que deveriam aparecer no dashboard. As
                            entrevistas foram gravadas e as gravações foram
                            analisadas para resumir e organizar as ideias
                            apresentadas pelos entrevistados.
                        </p>
                        <p className="mt-4 mb-0">
                            Entrevistados: Rodrigo Bedete (Head de Soluções),
                            Marina Turrisi (Analista de Sucesso do Cliente),
                            João Plentz (Chief Operating Officer) e Alexandre
                            Kellermann (Analista de Sucesso do Cliente).
                        </p>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Análise de Mapas de Calor",
                content: (
                    <>
                        <p className="my-4">
                            Utilizando a ferramenta Hotjar, analisei mapas de
                            calor de diversas telas do VC-X Sonar, para
                            visualizar a interação dos usuários com as
                            informações do sistema e tentar entender quais
                            informações consideravam mais importantes, a partir
                            da quantidade de cliques e de movimentações nos
                            elementos das páginas.
                        </p>
                    </>
                ),
                image: [imageHeatmap],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Definição de Objetivos e Estratégias",
                content: (
                    <>
                        <p className="my-4">
                            A partir das informações levantadas nas etapas
                            anteriores, gerei uma tabela de objetivos (primário
                            e secundários) e de estratégias para atingir esses
                            objetivos. Alguns dos objetivos:
                        </p>
                        <table className="table table-hover mb-0">
                            <tbody>
                                <tr>
                                    <th colSpan="3">Objetivo Primário</th>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        Expor uma visualização resumida com as
                                        principais informações de cada módulo do
                                        Sonar.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Objetivos Secundários</th>
                                    <th>Limitações e Problemas</th>
                                    <th>Estratégias</th>
                                </tr>
                                <tr>
                                    <td>
                                        Equilibrar a atenção dada entre as
                                        informações dos diversos módulos.
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Módulos têm quantidades
                                                diferentes de conteúdo.
                                            </li>
                                            <li>
                                                Dificuldade em fazer com que o
                                                painel geral e os painéis de
                                                módulos “conversem” entre si.
                                            </li>
                                            <li>
                                                Incluir dados que já existam nos
                                                painéis de cada módulo, fazendo
                                                com que pareçam redundantes
                                                nestes painéis.
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Organizar grid de maneira que a
                                                existência dos diversos módulos
                                                seja visível já no início da
                                                visualização.
                                            </li>
                                            <li>
                                                Dividir espaço da maneira mais
                                                igualitária possível.
                                            </li>
                                            <li>
                                                Realizar uma tarefa separada, em
                                                outro momento, para o redesign
                                                dos painéis dos módulos tendo o
                                                painel geral como referência.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Facilitar a compreensão das mudanças das
                                        informações ao longo de períodos de
                                        tempo maiores que um mês.
                                    </td>
                                    <td>
                                        Em alguns dados faz mais sentido ter
                                        visualização mensal (ex: vencimento de
                                        faturas). Pode ser que seja difícil
                                        compreender os controles.
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Apresentar informações por
                                                default em períodos de três
                                                meses.
                                            </li>
                                            <li>
                                                Permitir troca para 1 mês, 6
                                                meses e 12 meses.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ),
            },
            {
                title: "Modelagem",
                subtitle: "Definição de Conteúdo",
                content: (
                    <>
                        <p className="mb-0 mt-4">
                            Tendo os objetivos e estratégias como guia, listei
                            as informações principais que deveriam aparecer no
                            dashboard.
                        </p>
                    </>
                ),
            },
            {
                title: "Modelagem",
                subtitle: "Desenhos de Alternativas",
                content: (
                    <>
                        <p className="mt-4">
                            Com papel e lápis, fiz uma série de desenhos para
                            gerar diversas alternativas de ideias para a
                            interface do dashboard.
                        </p>
                    </>
                ),
                image: [imageSketch],
            },
            {
                title: "Modelagem",
                subtitle: "Desenho de Protótipo",
                content: (
                    <>
                        <p className="mt-4 mb-2">
                            Em seguida, selecionei as ideias desenhadas que
                            fossem mais adequadas aos objetivos e estratégias do
                            projeto e organizei um protótipo no Adobe XD, para
                            simular a interface e algumas interações básicas. O
                            protótipo foi apresentado à equipe de
                            desenvolvimento e a partir dos feedbacks da equipe,
                            foi refinado.
                        </p>
                        <p className="mt-4 mb-0">
                            Clique no prótitipo para interagir ou:
                            <a
                                className="btn btn-lg btn-link"
                                href="https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Abra o protótipo em nova aba
                            </a>
                        </p>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="border"
                                rel="noreferrer noopener"
                                src="https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen"
                                title="Prototype."
                                allowFullScreen
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    overflow: "auto",
                                }}
                            ></iframe>
                        </div>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Card 1",
                content: (
                    <>
                        <p className="mb-0 mt-4">
                            Como os cards têm diversos elementos em comum, como
                            estrutura de abas, gráficos e seletores de troca de
                            período, nós optamos por dividir a implementação em
                            duas tarefas: implementação do primeiro card
                            completo e implementação dos demais cards. Dessa
                            maneira, conseguimos revisar, ajustar e validar a
                            estrutura de html/css/js rapidamente no primeiro
                            card e replicar essa estrutura com mudanças pontuais
                            nos demais cards.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Card 1 - Abas do Bootstrap 4",
                content: (
                    <>
                        <p className="my-4">
                            Dando início a etapa, eu implementei a estrutura
                            básica utilizando os componentes de Cards e Abas do
                            framework Bootstrap 4.
                        </p>
                    </>
                ),
                image: [image1STCardTabs],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Card 1 - Gráficos",
                content: (
                    <>
                        <p className="my-4">
                            Testamos uma série de bibliotecas de gráficos para
                            definir qual seria a melhor para usar dentro das
                            necessidades do projeto. Decidimos pela ChartJs,
                            pois consideramos ter uma boa quantidade e qualidade
                            de gráficos disponíveis, facilidade de implementação
                            e uma documentação mais completa que as demais.
                            Implementei três gráficos de barras para representar
                            o consumo total de Dados Móveis, Voz e SMS.
                        </p>
                    </>
                ),
                image: [image1STCardChart],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Card 1 - Requisições Ajax",
                content: (
                    <>
                        <p className="mb-0 mt-4">
                            Em parceria com o desenvolvedor Gustavo Presa,
                            implementei as requisições ajax responsáveis por
                            coletar no banco de dados as informações que iriam
                            aparecer nos gráficos.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Card 1 - Seletor de Período",
                content: (
                    <>
                        <p className="my-4">
                            A partir do requisito de permitir aos usuários
                            visualizar dados de períodos diferentes nos gráficos
                            (3, 6 ou 12 meses), implementei um seletor de
                            período para realizar essa interação nos gráficos,
                            utilizando a biblioteca DayJs para manipular as
                            informações de datas e tempo.
                        </p>
                    </>
                ),
                image: [imagePeriodSelector],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Revisão de Código",
                content: (
                    <>
                        <p className="mb-0 mt-4">
                            Finalizada a implementação do primeiro card, abri o
                            Pull Request. O código foi revisado pelos
                            desenvolvedores Hugo Santos e Gustavo Presa. Após os
                            ajustes e aprovação, dei início a segunda tarefa,
                            para a implementação dos demais cards.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Demais Cards - Abas e Gráficos",
                content: (
                    <>
                        <p className="my-4">
                            Seguindo a mesma estrutura de cards, abas e gráficos
                            validada na etapa anterior, implementei os demais
                            cards do painel geral.
                        </p>
                    </>
                ),
                image: [imageOtherCardsTabsAndCharts],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Implementação Demais Cards - Tabelas",
                content: (
                    <>
                        <p className="my-4">
                            Em alguns dos cards as informações são mostradas em
                            formato de tabelas. Eu implementei essas tabelas com
                            html, classes de tabelas do Bootstrap 4 e
                            requisições ajax para coletar no banco de dados as
                            informações das tabelas.
                        </p>
                    </>
                ),
                image: [imageOtherCardsTables],
            },
            {
                title: "Desenvolvimento",
                subtitle:
                    "Implementação Demais Cards e Gráficos - Revisões de Código",
                content: (
                    <>
                        <p className="mb-0 mt-4">
                            A última etapa realizada foi a abertura de um Pull
                            Request para a tarefa. O código foi revisado
                            novamente pelos desenvolvedores Hugo Santos e
                            Gustavo Presa. Realizados os ajustes, o Painel Geral
                            foi publicado em homologação, para ser testado por
                            outras equipes. Foram colhidos feedbacks e
                            realizados pequenos ajustes antes da publicação para
                            os usuários.
                        </p>
                    </>
                ),
            },
        ],
        conclusion: (
            <>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/XVcYAwtsil8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="my-4">
                    O desenvolvimento do dashboard em si, já apresentou uma
                    complexidade considerável. A ideia de dividir a
                    implementação em duas partes, focando primeiro em um card,
                    validando a estrutura e depois replicando nos demais cards
                    se mostrou um grande acerto. Provavelmente evitamos que a
                    revisão de código fosse muito mais longa, já que diversos
                    ajustes seriam parecidos. Dessa forma, na segunda tarefa, já
                    implementamos tendo uma estrutura pronta e com menos ajustes
                    necessários.
                </p>
                <p className="my-4">
                    Meu maior desafio nesse projeto foi o de trabalhar com duas
                    bibliotecas que ainda não conhecia, a ChartJs e a DayJs. A
                    troca de período dos dados dos gráficos é uma das
                    funcionalidades mais importantes do dashboard, então
                    compreender como relacionar as duas bibliotecas exigiu um
                    esforço considerável.
                </p>
                <p className="mb-0 mt-4">
                    O que mais gostei neste projeto foi implementar os gráficos
                    com ChartJs. Tenho muito interesse na área de visualização
                    de dados e já havia estudado outra biblioteca, a D3. No
                    entanto, achei o desenvolvimento com ChartJs mais simples e
                    divertido, tanto pela estrutura da biblioteca quanto pela
                    qualidade da documentação. Pretendo continuar estudando e
                    trabalhando com ChartJs.
                </p>
            </>
        ),
    },
    project2: {
        title: "Cidades & Bikes | Webapp",
        caption: `
            Tela do Cidades e Bikes, versão para tablets, mostrando um exemplo de uma rota.
        `,
        image: imageCTB01,
        intro: `
            Cidades & Bikes é um mapa cicloviário interativo de de Florianópolis (Brasil) e cidades vizinhas. 
            Seu objetivo é fornecer informações sobre a infraestrutura cicloviária da região, como ciclovias, 
            além de locais úteis, como oficinas. Meu objetivo era pesquisar, projetar e desenvolver. 
            Eu já havia trabalhado neste projeto há alguns anos, sem poder desenvolvê-lo naquele momento. 
            Portanto, meu objetivo aqui era atualizar o design do projeto e implementá-lo.
        `,
        steps: [
            {
                title: "Pesquisa e Análise",
                subtitle: "Benchmarking",
                content: (
                    <>
                        <p className="my-4">
                            Comecei a analisar aplicativos semelhantes para
                            encontrar as principais qualidades dos melhores
                            aplicativos de ciclismo da atualidade. Depois de
                            instalar e testar dezenas de aplicativos, dois deles
                            me impressionaram mais: Bikemap e Ride with Gps. Em
                            seguida, realizei avaliações heurísticas em ambos,
                            seguindo a Heurística de Nielsen, para procurar boas
                            referências para o meu projeto. Cada aplicativo
                            recebeu uma nota, entre -2 (pior) e +2 (melhor) em
                            cada heurística.
                        </p>
                    </>
                ),
                image: [imageCTB02],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Análise de Tecnologias de Mapas",
                content: (
                    <>
                        <p className="my-4">
                            O objetivo aqui era encontrar qual plataforma de
                            mapas seria mais adequada para este projeto. Eu
                            testei muitos serviços e analisei cinco deles. Segui
                            cinco critérios: Design limpo do mapa; Gratuito para
                            uso comercial; Qualidade dos dados sobre a região da
                            Grande Florianópolis; Usabilidade; Curva de
                            aprendizado de desenvolvimento. Eu decidi que o
                            Mapbox era a ferramenta mais adequada, pois obteve
                            respostas positivas em todos os critérios. Além
                            disso, possui uma ótima documentação de
                            design/desenvolvimento.
                        </p>
                    </>
                ),
                image: [imageCTB03],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Análise de Tecnologias de Desenvolvimento",
                content: (
                    <>
                        <p className="mt-4 mb-0">
                            Minha primeira ideia foi desenvolver um aplicativo
                            móvel para que pudesse ser usado enquanto pedalava.
                            Como eu tinha algum conhecimento de Javascript,
                            minha escolha foi React Native. Esse framework torna
                            possível desenvolver um aplicativo quase 100%
                            nativo, sem precisar aprender Java (Android) ou
                            Swift (iOS). Depois de algum tempo, percebi que,
                            embora seja de fato uma ótima ferramenta, o React
                            Native requer uma quantidade considerável de
                            adaptação para funcionar em conjunto com as
                            Bibliotecas do Mapbox, cujas documentações são, em
                            sua maioria, em Vanilla JS. Portanto, migrei para um
                            aplicativo web na primeira versão, usando HTML, CSS
                            e JS como núcleo.
                        </p>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Descrição de Tarefas dos Usuários",
                content: (
                    <>
                        <p className="my-4">
                            Após concluir a fase de Pesquisa, eu comecei a
                            escrever um documento de Tarefas do Usuário para
                            atualizar os requisitos definidos quando o projeto
                            foi inicialmente idealizado.
                        </p>
                    </>
                ),
                image: [imageCTB03B],
            },
            {
                title: "Modelagem",
                subtitle: "Desenho de Alternativas",
                content: (
                    <>
                        <p className="mt-4">
                            Seguindo os novos requisitos das Histórias de
                            Usuário, trabalhei em alguns desenhos à mão da
                            interface.
                        </p>
                    </>
                ),
                image: [imageCTB0401],
            },
            {
                title: "Modelagem",
                subtitle: "Prototipagem",
                content: (
                    <>
                        <p className="mt-4">
                            Em seguida, criei um novo protótipo para definir um
                            layout básico e simular a navegação entre telas. As
                            ferramentas utilizadas para a prototipagem foram
                            Balsamiq Mockups e Marvel App.
                        </p>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="border"
                                rel="noreferrer noopener"
                                src="https://marvelapp.com/prototype/8235gj3?emb=1&iosapp=false&frameless=false"
                                title="Prototype."
                                allowFullScreen
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    overflow: "auto",
                                }}
                            ></iframe>
                        </div>
                    </>
                ),
            },
            {
                title: "Modelagem",
                subtitle: "Novo Nome",
                content: (
                    <>
                        <p className="mt-4">
                            Bicicletópolis, o antigo nome do projeto, era uma
                            ideia de uma pessoa que não participa mais deste
                            empreendimento. Assim, eu decidi criar um novo nome.
                            Tinha que ser um nome que explicasse rapidamente a
                            função do aplicativo web e precisava estar
                            disponível. Além disso, não deveria limitar o
                            projeto a um local, deixando-o aberto para replicar
                            o projeto em outras cidades. Minha escolha foi
                            'Cidades e Bicicletas' mais a região específica,
                            nesse caso 'Cidades e Bicicletas - Grande
                            Florianópolis'.
                        </p>
                    </>
                ),
                image: [imageCTB06],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Rebranding",
                content: (
                    <>
                        <p className="mt-4">
                            Como consequência da mudança de nome, tive que
                            repensar a marca também. Para otimizar o tempo,
                            minha opção foi manter todos os elementos que não
                            foram afetados pelo nome. Mantive o esquema de cores
                            e a tipografia e trabalhei em um novo logotipo.
                        </p>
                    </>
                ),
                image: [imageCTB0701],
            },
            {
                title: "Desenvolvimento do Mapa",
                subtitle: "Revisão e Atualização de Dados no OpenStreetMap",
                content: (
                    <>
                        <p className="my-4">
                            Muitas das informações sobre os lugares presentes no
                            Mapbox vêm do&nbsp;
                            <a href="https://www.openstreetmap.org/">
                                OpenStreetMap
                            </a>
                            . Como os usuários fornecem as informações do OSM,
                            eu comecei analisando as informações já presentes
                            sobre a região da Grande Florianópolis. Eu procurei
                            ciclovias, ciclofaixas, caminhos compartilhados,
                            vagas para estacionamento de bicicletas, lojas de
                            bicicletas, oficinas, postos de gasolina e banheiros
                            públicos/abertos. Como faltavam informações, eu
                            mesmo as editei (seguindo as&nbsp;
                            <a href="https://wiki.openstreetmap.org/wiki/Beginners%27_guide">
                                diretrizes do OSM
                            </a>
                            ) para preparar os dados necessários para o mapa.
                        </p>
                    </>
                ),
                image: [imageCTB08],
            },
            {
                title: "Desenvolvimento do Mapa",
                subtitle: "Geração dos Arquivos GeoJSON",
                content: (
                    <>
                        <p className="my-4">
                            Para inserir os dados necessários em um novo mapa
                            Mapbox, uma maneira é usar o formato GeoJSON. Esses
                            arquivos contêm objetos que descrevem as
                            características dos locais (por exemplo, latitude,
                            longitude, nome, etc.). Usando a ferramenta de
                            filtragem de dados&nbsp;
                            <a href="https://overpass-turbo.eu/">
                                Overpass Turbo
                            </a>
                            , Procurei as tags que precisava (por exemplo,
                            'amenity=toilet') e gerei os arquivos GeoJSON.
                        </p>
                    </>
                ),
                image: [imageCTB09],
            },
            {
                title: "Desenvolvimento do Mapa",
                subtitle: "Criação de Datasets no Mapbox",
                content: (
                    <>
                        <p className="mt-4">
                            Passando para o Mapbox Studio, tive que criar
                            Datasets para servir posteriormente como fontes de
                            informações para cada camada do mapa. De acordo com
                            a documentação do Mapbox:
                        </p>
                        <blockquote className="blockquote mb-4 px-5">
                            <p>
                                <em>
                                    "um Dataset é uma coleção editável de
                                    recursos GeoJSON".
                                </em>
                            </p>
                        </blockquote>
                    </>
                ),
                image: [imageCTB10],
            },
            {
                title: "Desenvolvimento do Mapa",
                subtitle: "Criação de Tilesets no Mapbox",
                content: (
                    <>
                        <p className="mt-4">
                            O Mapbox define um titleset como:
                        </p>
                        <blockquote className="blockquote mb-4 px-5">
                            <p>
                                <em>
                                    "uma coleção de dados raster ou vetoriais
                                    divididos em uma grade uniforme de quadrados
                                    com até 22 níveis de zoom predefinidos"
                                </em>
                            </p>
                        </blockquote>
                        <p className="mt-4">
                            A partir dos Datasets da última etapa, exportei
                            Tilesets para cada camada de informação que eu
                            inseriria posteriormente no estilo do mapa.
                        </p>
                    </>
                ),
                image: [imageCTB11],
            },
            {
                title: "Desenvolvimento do Mapa",
                subtitle: "Criação do Estilo de Mapa",
                content: (
                    <>
                        <p className="mt-4">
                            Por fim, gerei um novo mapa do estilo Mapbox Streets
                            e o personalizei. Cada tipo de local tinha sua
                            própria camada, com o respectivo Tileset como fonte
                            de dados. Além disso, aqui carreguei os ícones
                            personalizados que eu havia projetado anteriormente.
                        </p>
                    </>
                ),
                image: [imageCTB12],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "HTML Básico e Inserção do Mapa",
                content: (
                    <>
                        <p className="mt-4">
                            Com o estilo do mapa pronto, criei o HTML básico e
                            adicionei um pouco de JS para inserir o mapa mapbox
                            nele.
                        </p>
                    </>
                ),
                image: [imageCTB13],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Barras de Navegação Superior e Lateral (Drawer)",
                content: (
                    <>
                        <p className="mt-4">
                            Para criar a barra superior e a esquerda usei a
                            biblioteca&nbsp;
                            <a href="https://material.io/develop/web/docs/getting-started/">
                                Material Components Web{" "}
                            </a>
                            . Além disso, adicionei mais código JS para a
                            interação entre os ícones no mapa e o menu esquerdo
                            (ou seja, quando alguém clica em um link, ele
                            mostra/oculta a camada no mapa).
                        </p>
                    </>
                ),
                image: [imageCTB14],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Modais do Mapa",
                content: (
                    <>
                        <p className="mt-4">
                            Em seguida, inseri o código para fazer com que cada
                            ícone no mapa, ao clicar, mostrasse um modal com as
                            informações do respectivo local.
                        </p>
                    </>
                ),
                image: [imageCTB15],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Ferramenta de Pesquisa",
                content: (
                    <>
                        <p className="mt-4">
                            A ferramenta de pesquisa foi feita com a&nbsp;
                            <a href="https://docs.mapbox.com/api/search/#geocoding">
                                Geocoding API do Mapbox{" "}
                            </a>
                            .
                        </p>
                    </>
                ),
                image: [imageCTB16],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Rotas",
                content: (
                    <>
                        <p className="mt-4">
                            Em seguida, adicionei a funcionalidade de criação de
                            rotas pelo usuário. Isso foi possível com a &nbsp;
                            <a href="https://docs.mapbox.com/api/navigation/#directions">
                                Directions API do Mapbox{" "}
                            </a>
                            .
                        </p>
                    </>
                ),
                image: [imageCTB17],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Rotas e Localização do Usuário",
                content: (
                    <>
                        <p className="mt-4">
                            Originalmente, a API de rotas exige que o usuário
                            insira manualmente os pontos inicial e final da
                            rota. Como o requisito era ter a localização do
                            usuário como ponto inicial, inseri a solicitação
                            para obter a localização atual do usuário. Se o
                            usuário permitisse, o ponto A seria a localização do
                            usuário; caso contrário, seria uma posição fixa - a
                            estação de ônibus metropolitana no centro da região.
                        </p>
                    </>
                ),
                image: [imageCTB18],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Botão de Chamada Telefônica",
                content: (
                    <>
                        <p className="mt-4">
                            Outra função importante era ligar para um local por
                            meio de um botão. Coloquei um botão em todos os
                            locais que têm um número de telefone informado. Se o
                            usuário estiver ao telefone, ele/ela precisa apenas
                            clicar no botão para abrir o aplicativo de chamadas
                            com o número do local.
                        </p>
                    </>
                ),
                image: [imageCTB19],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Informação de Clima",
                content: (
                    <>
                        <p className="mt-4">
                            A próxima tarefa de Desenvolvimento Front-end foi
                            possibilitar que o usuário saiba as condições
                            climáticas atuais para sua localização. A previsão é
                            fornecida pela API Open Weather. Atualmente, ainda
                            não é possível obter as condições com base na
                            localização do usuário (ainda estou trabalhando
                            nisso). Portanto, ele está exibindo o clima atual
                            apenas de Florianópolis.
                        </p>
                    </>
                ),
                image: [imageCTB20],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Hospedagem e Publicação",
                content: (
                    <>
                        <p className="my-4">
                            A tarefa final de desenvolvimento foi publicar
                            Cidades e Bicicletas. Primeiramente, eu precisava
                            encontrar um host que suportasse https, já que a
                            conexão precisa ser segura para que o site armazene
                            a localização do usuário. Eu decidi usar &nbsp;
                            <a href="/">Netlify</a> porque esse serviço não só
                            atendia ao requisito de suporte a https, mas também
                            era muito fácil de publicar e manter o site.
                        </p>
                        <a
                            className="btn btn-lg btn-outline-primary mb-4"
                            href="https://cidadesebikes.netlify.app/"
                            rel="noreferrer noopener"
                            target="_blank"
                            title="Abrir webapp em nova aba."
                        >
                            CIDADES & BIKES WEBAPP
                        </a>
                    </>
                ),
                image: [imageCTB2001SM],
            },
        ],
        conclusion: (
            <>
                <p className="mb-0 mt-4">
                    Muita coisa mudou desde que projetei o projeto pela primeira
                    vez, e decidi adotar uma abordagem diferente desta vez.
                    Cinco anos atrás, eu segui rigorosamente o método de design
                    e, naquele contexto, fazia sentido. Hoje em dia, por outro
                    lado, minha direção era desenvolver a versão um o mais
                    rápido possível, para que eu pudesse testá-la no mundo
                    "real".
                </p>
                <p className="mb-0 mt-4">
                    Descobri que, sem surpresa, os serviços de mapas são muito
                    mais fáceis de trabalhar, além de serem muito mais
                    acessíveis. Ter ferramentas como Mapbox e OpenStreetMap
                    tornou o projeto possível.
                </p>
                <p className="mb-0 mt-4">
                    No desenvolvimento de tecnologias, minha primeira intenção
                    era desenvolver um aplicativo móvel com React Native.
                    Percebi, enquanto tentava, que levaria muito tempo para
                    adaptar tudo ao React Native, já que eu tinha apenas
                    conhecimento básico de desenvolvimento. Decidi que era
                    melhor criar uma versão mais simples, mas rápida - um
                    aplicativo web em JavaScript puro, e então testar o projeto.
                </p>
                <p className="mb-0 mt-4">
                    Foi ótimo finalmente ter o projeto que trabalhei tanto para
                    criar se tornando realidade, mas também aprendi muito sobre
                    desenvolvimento web e design de mapas, e isso me tornou um
                    profissional mais qualificado e confiante.
                </p>
            </>
        ),
    },
    project3: {
        title: "Padronização de Tabelas - VC-X Sonar | Tabelas",
        caption: `
            Tela do VC-X Sonar, mostrando as tabelas de Ativos Vinculados e Licenças Vinculadas.
        `,
        image: imageVCXT01,
        intro: `
            O VC-X Sonar é uma plataforma que visa descomplicar a automação, aquisição e gestão de 
            telecom e TI para empresas, gerando visão, controle e economia. Dada a natureza do 
            software, as tabelas eram uma parte bastante importante da experiência, especialmente 
            levando em conta que aproximadamente 90% das páginas do software continham ao menos uma 
            tabela. Meu papel foi de designer e desenvolvedor front-end.
        `,
        steps: [
            {
                title: "Pesquisa e Análise",
                subtitle: "Referências Sobre Design de Tabelas",
                content: (
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
                image: [imageVCXT02],
                imageCaption: "Princípios de design para tabelas do Material Design.",
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Avaliação Heurística Tabelas",
                content: (
                    <>
                        <p className="my-4">
                            Eu fiz uma análise de usabilidade das tabelas seguindo o método da 
                            avaliação heurística de Nielsen.
                        </p>
                    </>
                ),
                image: [imageVCXT01],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Mapas de Calor",
                content: (
                    <>
                        <p className="my-4">
                            Adicionei ao VC-X Sonar ferramentas para gerar mapas de calor. 
                            Inicialmente, usei o Matomo e, posteriormente, o Hotjar. Com essas 
                            ferramentas, pude fazer análises de mapas de cliques, de movimentação de
                             mouse e também de scroll.
                        </p>
                    </>
                ),
                image: [imageVCXT01],
            },
            {
                title: "Modelagem",
                subtitle: "Desenho de Alternativas",
                content: (
                    <>
                        <p className="mt-4">
                            Seguindo os novos requisitos das Histórias de
                            Usuário, trabalhei em alguns desenhos à mão da
                            interface.
                        </p>
                    </>
                ),
                image: [imageVCXT01],
            },
            {
                title: "Modelagem",
                subtitle: "Definição de Princípios de Design para as Tabelas",
                content: (
                    <>
                        <p className="mt-4">
                            Tendo feito a pesquisa e análise do estado atual, defini princípios de 
                            design para as tabelas do Sonar.
                        </p>
                    </>
                ),
                image: [imageVCXT01],
            },
            {
                title: "Desenvolvimento Front-end",
                subtitle: "Implementação DatatablesJS + Bootstrap",
                content: (
                    <>
                        <p className="mt-4">
                            Placeholder.
                        </p>
                    </>
                ),
                image: [imageVCXT01],
            },
        ],
        conclusion: (
            <>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/XVcYAwtsil8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="mb-0 mt-4">
                    Placeholder.
                </p>
            </>
        ),
    },
};

export default projects;
