import SingleFigure from '../../../../../components/SingleFigure';

export const StepsContent = [
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        No começo do projeto, escrevi uma descrição básica do problema e listei
        brevemente as atividades que seriam realizadas. Conversei com o CTO e o
        Head da equipe para que ajudassem nessa descrição.
      </p>
      <blockquote className='blockquote px-5 mb-0'>
        <p className='my-4'>
          <em>
            [...] a primeira tela a aparecer, o Painel Telecom pode ser
            interpretado como um painel geral, fazendo com que só sejam vistas
            informações de um módulo e “escondendo” as informações dos outros
            módulos. Foi relatado inclusive que clientes comentaram que não
            tinham percebido a existência dos outros painéis.
          </em>
        </p>
        <p>
          <em>
            Outro ponto levantado por clientes internos foi que atualmente os
            painéis apresentam informações em períodos de tempo curto (por mês).
            Por consequência há uma dificuldade de enxergar dados de períodos
            mais longos e fazer comparações entre períodos (ex: diferenças entre
            os meses ao longo de um ano).
          </em>
        </p>
        <footer className='blockquote-footer'>
          Trecho da descrição básica do problema.
        </footer>
      </blockquote>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Nesta etapa, eu pesquisei e avaliei sete softwares web que contém
        dashboards, considerados como concorrentes do VC-X Sonar ou que tenham
        alguma similaridade, mesmo sendo de outros segmentos. A etapa tinha como
        objetivo buscar boas referências e possíveis oportunidades para a
        organização de conteúdo e funcionalidades para o dashboard. Os softwares
        analisados foram: Google Analytics, Conta Azul, Conta Mínima, Meu
        Dinheiro Invest, Mobills, Quick Books e Sistema Soma.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-0'>
        Posteriormente, entrevistei quatro clientes internos que têm contato
        direto com clientes. A ideia desta etapa era colher feedbacks que eles
        receberam de clientes a respeito do VC-X Sonar e também ter uma noção
        melhor sobre a visão de cada um sobre as informações que deveriam
        aparecer no dashboard. As entrevistas foram gravadas e as gravações
        foram analisadas para resumir e organizar as ideias apresentadas pelos
        entrevistados.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Utilizando a ferramenta Hotjar, analisei mapas de calor de diversas
        telas do VC-X Sonar, para visualizar a interação dos usuários com as
        informações do sistema e tentar entender quais informações consideravam
        mais importantes, a partir da quantidade de cliques e de movimentações
        nos elementos das páginas.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        A partir das informações levantadas nas etapas anteriores, gerei uma
        tabela de objetivos (primário e secundários) e de estratégias para
        atingir esses objetivos. Alguns dos objetivos:
      </p>
      <table className='table table-hover mb-0'>
        <tbody>
          <tr>
            <th colSpan='3'>Objetivo Primário</th>
          </tr>
          <tr>
            <td colSpan='3'>
              Expor uma visualização resumida com as principais informações de
              cada módulo do Sonar.
            </td>
          </tr>
          <tr>
            <th>Objetivos Secundários</th>
            <th>Limitações e Problemas</th>
            <th>Estratégias</th>
          </tr>
          <tr>
            <td>
              Equilibrar a atenção dada entre as informações dos diversos
              módulos.
            </td>
            <td>
              <ul className='pl-4'>
                <li>Módulos têm quantidades diferentes de conteúdo.</li>
                <li>
                  Dificuldade em fazer com que o painel geral e os painéis de
                  módulos “conversem” entre si.
                </li>
                <li>
                  Incluir dados que já existam nos painéis de cada módulo,
                  fazendo com que pareçam redundantes nestes painéis.
                </li>
              </ul>
            </td>
            <td>
              <ul className='pl-4'>
                <li>
                  Organizar grid de maneira que a existência dos diversos
                  módulos seja visível já no início da visualização.
                </li>
                <li>Dividir espaço da maneira mais igualitária possível.</li>
                <li>
                  Realizar uma tarefa separada, em outro momento, para o
                  redesign dos painéis dos módulos tendo o painel geral como
                  referência.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Facilitar a compreensão das mudanças das informações ao longo de
              períodos de tempo maiores que um mês.
            </td>
            <td>
              Em alguns dados faz mais sentido ter visualização mensal (ex:
              vencimento de faturas). Pode ser que seja difícil compreender os
              controles.
            </td>
            <td>
              <ul className='pl-4'>
                <li>
                  Apresentar informações por default em períodos de três meses.
                </li>
                <li>Permitir troca para 1 mês, 6 meses e 12 meses.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        Tendo os objetivos e estratégias como guia, listei as informações
        principais que deveriam aparecer no dashboard.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Com papel e lápis, fiz uma série de desenhos para gerar diversas
        alternativas de ideias para a interface do dashboard.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-2'>
        Em seguida, selecionei as ideias desenhadas que fossem mais adequadas
        aos objetivos e estratégias do projeto e organizei um protótipo no Adobe
        XD, para simular a interface e algumas interações básicas. O protótipo
        foi apresentado à equipe de desenvolvimento e a partir dos feedbacks da
        equipe, foi refinado.
      </p>
      <p className='mt-4 mb-0'>
        Clique no prótitipo para interagir ou:
        <a
          className='btn btn-lg btn-link'
          href='https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen'
          rel='noreferrer noopener'
          target='_blank'
        >
          Abra o protótipo em nova aba
        </a>
      </p>
      <div className='ratio ratio-16x9'>
        <iframe
          className='border'
          rel='noreferrer noopener'
          src='https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen'
          title='Prototype.'
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'auto',
          }}
        ></iframe>
      </div>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        Como os cards têm diversos elementos em comum, como estrutura de abas,
        gráficos e seletores de troca de período, nós optamos por dividir a
        implementação em duas tarefas: implementação do primeiro card completo e
        implementação dos demais cards. Dessa maneira, conseguimos revisar,
        ajustar e validar a estrutura de html/css/js rapidamente no primeiro
        card e replicar essa estrutura com mudanças pontuais nos demais cards.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Dando início a etapa, eu implementei a estrutura básica utilizando os
        componentes de Cards e Abas do framework Bootstrap 4.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Testamos uma série de bibliotecas de gráficos para definir qual seria a
        melhor para usar dentro das necessidades do projeto. Decidimos pela
        ChartJs, pois consideramos ter uma boa quantidade e qualidade de
        gráficos disponíveis, facilidade de implementação e uma documentação
        mais completa que as demais. Implementei três gráficos de barras para
        representar o consumo total de Dados Móveis, Voz e SMS.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        Em parceria com o desenvolvedor Gustavo Presa, implementei as
        requisições ajax responsáveis por coletar no banco de dados as
        informações que iriam aparecer nos gráficos.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        A partir do requisito de permitir aos usuários visualizar dados de
        períodos diferentes nos gráficos (3, 6 ou 12 meses), implementei um
        seletor de período para realizar essa interação nos gráficos, utilizando
        a biblioteca Day.js para manipular as informações de datas e tempo.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        Finalizada a implementação do primeiro card, abri o Pull Request. O
        código foi revisado pelos desenvolvedores Hugo Santos e Gustavo Presa.
        Após os ajustes e aprovação, dei início a segunda tarefa, para a
        implementação dos demais cards.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Seguindo a mesma estrutura de cards, abas e gráficos validada na etapa
        anterior, implementei os demais cards do painel geral.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Em alguns dos cards as informações são mostradas em formato de tabelas.
        Eu implementei essas tabelas com html, classes de tabelas do Bootstrap 4
        e requisições ajax para coletar no banco de dados as informações das
        tabelas.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        A última etapa realizada foi a abertura de um Pull Request para a
        tarefa. O código foi revisado novamente pelos desenvolvedores Hugo
        Santos e Gustavo Presa. Realizados os ajustes, o Painel Geral foi
        publicado em homologação, para ser testado por outras equipes. Foram
        colhidos feedbacks e realizados pequenos ajustes antes da publicação
        para os usuários.
      </p>
    </>
  ),
];
