import SingleFigure from '../../../../components/SingleFigure';

export const StepsContent = [
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Comecei a analisar aplicativos semelhantes para encontrar as principais
        qualidades dos melhores aplicativos de ciclismo da atualidade. Depois de
        instalar e testar dezenas de aplicativos, dois deles me impressionaram
        mais: Bikemap e Ride with Gps. Em seguida, realizei avaliações
        heurísticas em ambos, seguindo a Heurística de Nielsen, para procurar
        boas referências para o meu projeto. Cada aplicativo recebeu uma nota,
        entre -2 (pior) e +2 (melhor) em cada heurística.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        O objetivo aqui era encontrar qual plataforma de mapas seria mais
        adequada para este projeto. Eu testei muitos serviços e analisei cinco
        deles. Segui cinco critérios: Design limpo do mapa; Gratuito para uso
        comercial; Qualidade dos dados sobre a região da Grande Florianópolis;
        Usabilidade; Curva de aprendizado de desenvolvimento. Eu decidi que o
        Mapbox era a ferramenta mais adequada, pois obteve respostas positivas
        em todos os critérios. Além disso, possui uma ótima documentação de
        design/desenvolvimento.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-0'>
        Minha primeira ideia foi desenvolver um aplicativo móvel para que
        pudesse ser usado enquanto pedalava. Como eu tinha algum conhecimento de
        Javascript, minha escolha foi React Native. Esse framework torna
        possível desenvolver um aplicativo quase 100% nativo, sem precisar
        aprender Java (Android) ou Swift (iOS). Depois de algum tempo, percebi
        que, embora seja de fato uma ótima ferramenta, o React Native requer uma
        quantidade considerável de adaptação para funcionar em conjunto com as
        Bibliotecas do Mapbox, cujas documentações são, em sua maioria, em
        Vanilla JS. Portanto, migrei para um aplicativo web na primeira versão,
        usando HTML, CSS e JS como núcleo.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Após concluir a fase de Pesquisa, eu comecei a escrever um documento de
        Tarefas do Usuário para atualizar os requisitos definidos quando o
        projeto foi inicialmente idealizado.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Seguindo os novos requisitos das Histórias de Usuário, trabalhei em
        alguns desenhos à mão da interface.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Em seguida, criei um novo protótipo para definir um layout básico e
        simular a navegação entre telas. As ferramentas utilizadas para a
        prototipagem foram Balsamiq Mockups e Marvel App.
      </p>
      <div className='ratio ratio-16x9'>
        <iframe
          className='border'
          rel='noreferrer noopener'
          src='https://marvelapp.com/prototype/8235gj3?emb=1&iosapp=false&frameless=false'
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
      <p className='mt-4'>
        Bicicletópolis, o antigo nome do projeto, era uma ideia de uma pessoa
        que não participa mais deste empreendimento. Assim, eu decidi criar um
        novo nome. Tinha que ser um nome que explicasse rapidamente a função do
        aplicativo web e precisava estar disponível. Além disso, não deveria
        limitar o projeto a um local, deixando-o aberto para replicar o projeto
        em outras cidades. Minha escolha foi 'Cidades e Bicicletas' mais a
        região específica, nesse caso 'Cidades e Bicicletas - Grande
        Florianópolis'.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Como consequência da mudança de nome, tive que repensar a marca também.
        Para otimizar o tempo, minha opção foi manter todos os elementos que não
        foram afetados pelo nome. Mantive o esquema de cores e a tipografia e
        trabalhei em um novo logotipo.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Muitas das informações sobre os lugares presentes no Mapbox vêm do&nbsp;
        <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>. Como os
        usuários fornecem as informações do OSM, eu comecei analisando as
        informações já presentes sobre a região da Grande Florianópolis. Eu
        procurei ciclovias, ciclofaixas, caminhos compartilhados, vagas para
        estacionamento de bicicletas, lojas de bicicletas, oficinas, postos de
        gasolina e banheiros públicos/abertos. Como faltavam informações, eu
        mesmo as editei (seguindo as&nbsp;
        <a href='https://wiki.openstreetmap.org/wiki/Beginners%27_guide'>
          diretrizes do OSM
        </a>
        ) para preparar os dados necessários para o mapa.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Para inserir os dados necessários em um novo mapa Mapbox, uma maneira é
        usar o formato GeoJSON. Esses arquivos contêm objetos que descrevem as
        características dos locais (por exemplo, latitude, longitude, nome,
        etc.). Usando a ferramenta de filtragem de dados&nbsp;
        <a href='https://overpass-turbo.eu/'>Overpass Turbo</a>, Procurei as
        tags que precisava (por exemplo, 'amenity=toilet') e gerei os arquivos
        GeoJSON.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Passando para o Mapbox Studio, tive que criar Datasets para servir
        posteriormente como fontes de informações para cada camada do mapa. De
        acordo com a documentação do Mapbox:
      </p>
      <blockquote className='blockquote mb-4 px-5'>
        <p>
          <em>"um Dataset é uma coleção editável de recursos GeoJSON".</em>
        </p>
      </blockquote>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>O Mapbox define um titleset como:</p>
      <blockquote className='blockquote mb-4 px-5'>
        <p>
          <em>
            "uma coleção de dados raster ou vetoriais divididos em uma grade
            uniforme de quadrados com até 22 níveis de zoom predefinidos"
          </em>
        </p>
      </blockquote>
      <p className='mt-4'>
        A partir dos Datasets da última etapa, exportei Tilesets para cada
        camada de informação que eu inseriria posteriormente no estilo do mapa.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Por fim, gerei um novo mapa do estilo Mapbox Streets e o personalizei.
        Cada tipo de local tinha sua própria camada, com o respectivo Tileset
        como fonte de dados. Além disso, aqui carreguei os ícones personalizados
        que eu havia projetado anteriormente.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Com o estilo do mapa pronto, criei o HTML básico e adicionei um pouco de
        JS para inserir o mapa mapbox nele.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Para criar a barra superior e a esquerda usei a biblioteca&nbsp;
        <a href='https://material.io/develop/web/docs/getting-started/'>
          Material Components Web{' '}
        </a>
        . Além disso, adicionei mais código JS para a interação entre os ícones
        no mapa e o menu esquerdo (ou seja, quando alguém clica em um link, ele
        mostra/oculta a camada no mapa).
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Em seguida, inseri o código para fazer com que cada ícone no mapa, ao
        clicar, mostrasse um modal com as informações do respectivo local.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        A ferramenta de pesquisa foi feita com a&nbsp;
        <a href='https://docs.mapbox.com/api/search/#geocoding'>
          Geocoding API do Mapbox{' '}
        </a>
        .
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Em seguida, adicionei a funcionalidade de criação de rotas pelo usuário.
        Isso foi possível com a &nbsp;
        <a href='https://docs.mapbox.com/api/navigation/#directions'>
          Directions API do Mapbox{' '}
        </a>
        .
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Originalmente, a API de rotas exige que o usuário insira manualmente os
        pontos inicial e final da rota. Como o requisito era ter a localização
        do usuário como ponto inicial, inseri a solicitação para obter a
        localização atual do usuário. Se o usuário permitisse, o ponto A seria a
        localização do usuário; caso contrário, seria uma posição fixa - a
        estação de ônibus metropolitana no centro da região.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Outra função importante era ligar para um local por meio de um botão.
        Coloquei um botão em todos os locais que têm um número de telefone
        informado. Se o usuário estiver ao telefone, ele/ela precisa apenas
        clicar no botão para abrir o aplicativo de chamadas com o número do
        local.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        A próxima tarefa de Desenvolvimento Front-end foi possibilitar que o
        usuário saiba as condições climáticas atuais para sua localização. A
        previsão é fornecida pela API Open Weather. Atualmente, ainda não é
        possível obter as condições com base na localização do usuário (ainda
        estou trabalhando nisso). Portanto, ele está exibindo o clima atual
        apenas de Florianópolis.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        A tarefa final de desenvolvimento foi publicar Cidades e Bicicletas.
        Primeiramente, eu precisava encontrar um host que suportasse https, já
        que a conexão precisa ser segura para que o site armazene a localização
        do usuário. Eu decidi usar &nbsp;
        <a href='/'>Netlify</a> porque esse serviço não só atendia ao requisito
        de suporte a https, mas também era muito fácil de publicar e manter o
        site.
      </p>
      <a
        className='btn btn-lg btn-outline-primary mb-4'
        href='https://cidadesebikes.netlify.app/'
        rel='noreferrer noopener'
        target='_blank'
        title='Abrir webapp em nova aba.'
      >
        CIDADES & BIKES WEBAPP
      </a>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
];
