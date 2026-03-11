import SingleFigure from '../../../../../components/SingleFigure';

export const StepsContent = [
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        I began analyzing similar apps to find the main qualities of the best cycling applications 
        available today. After installing and testing dozens of apps, two stood out to me the most: 
        Bikemap and Ride with GPS. Then, I conducted heuristic evaluations on both, following 
        Nielsen's Heuristics, to search for good references for my project. Each app received a 
        score, ranging from -2 (worst) to +2 (best) for each heuristic.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        The goal here was to find which mapping platform would be most suitable for this project. I 
        tested many services and analyzed five of them. I followed five criteria: Clean map design; 
        Free for commercial use; Quality of data for the Greater Florianópolis region; Usability; 
        Development learning curve. I decided that Mapbox was the most suitable tool, as it received 
        positive responses in all criteria. Furthermore, it has excellent design/development 
        documentation.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-0'>
        My first idea was to develop a mobile app so it could be used while cycling. Since I had 
        some knowledge of Javascript, my choice was React Native. This framework makes it possible 
        to develop an almost 100% native app without having to learn Java (Android) or Swift (iOS). 
        After some time, I realized that, while it is indeed a great tool, React Native requires a 
        considerable amount of adaptation to work together with the Mapbox Libraries, whose 
        documentation is mostly in Vanilla JS. Therefore, I migrated to a web app for the first 
        version, using HTML, CSS, and JS as the core.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        After completing the Research phase, I began writing a User Tasks document to update the 
        requirements defined when the project was initially conceived.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Following the new requirements from the User Stories, I worked on some hand-drawn interface 
        sketches.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Then, I created a new prototype to define a basic layout and simulate navigation between 
        screens. The tools used for prototyping were Balsamiq Mockups and Marvel App.
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
        Bicicletópolis, the project's old name, was an idea from a person who is no longer involved 
        in this venture. Therefore, I decided to create a new name. It had to be a name that quickly 
        explained the web application's function and needed to be available. Furthermore, it should 
        not limit the project to a single location, leaving it open to replicate the project in 
        other cities. My choice was 'Cities and Bikes' plus the specific region, in this case 
        'Cities and Bikes - Greater Florianópolis'.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        As a consequence of the name change, I had to rethink the brand as well. To optimize time, 
        my option was to keep all elements that were not affected by the name. I kept the color 
        scheme and typography and worked on a new logo.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Much of the information about places on Mapbox comes from&nbsp;
        <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>. Since users provide OSM 
        information, I began by analyzing the information already present about the Greater 
        Florianópolis region. I searched for bike paths, bike lanes, shared paths, bicycle parking 
        spaces, bike shops, repair shops, gas stations, and public/open bathrooms. Since information 
        was missing, I edited it myself (following the&nbsp;
        <a href='https://wiki.openstreetmap.org/wiki/Beginners%27_guide'>
          OSM guidelines
        </a>
        ) to prepare the necessary data for the map.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        To insert the necessary data into a new Mapbox map, one way is to use the GeoJSON format. 
        These files contain objects describing the features of locations (e.g., latitude, longitude, 
        name, etc.). Using the data filtering tool&nbsp;
        <a href='https://overpass-turbo.eu/'>Overpass Turbo</a>, I searched for the tags I needed 
        (e.g., 'amenity=toilet') and generated the GeoJSON files.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Moving on to Mapbox Studio, I had to create Datasets to later serve as information sources 
        for each map layer. According to Mapbox documentation:
      </p>
      <blockquote className='blockquote mb-4 px-5'>
        <p>
          <em>"a Dataset is an editable collection of GeoJSON features."</em>
        </p>
      </blockquote>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>Mapbox defines a tileset as:</p>
      <blockquote className='blockquote mb-4 px-5'>
        <p>
          <em>
            "a collection of raster or vector data split into a uniform grid of squares at up to 22 
            predefined zoom levels"
          </em>
        </p>
      </blockquote>
      <p className='mt-4'>
        From the Datasets in the previous step, I exported Tilesets for each information layer that 
        I would later insert into the map style.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Finally, I generated a new Mapbox Streets style map and customized it. Each type of location 
        had its own layer, with the respective Tileset as the data source. Additionally, here I 
        loaded the custom icons that I had designed earlier.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        With the map style ready, I created the basic HTML and added some JS to insert the Mapbox 
        map into it.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        To create the top and left bars, I used the&nbsp;
        <a href='https://material.io/develop/web/docs/getting-started/'>
          Material Components Web{' '}
        </a>
        library. Furthermore, I added more JS code for the interaction between the icons on the map 
        and the left menu (i.e., when someone clicks on a link, it shows/hides the layer on the 
        map).
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Next, I inserted the code so that each icon on the map, when clicked, would display a modal 
        with the information of the respective location.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        The search tool was made using the&nbsp;
        <a href='https://docs.mapbox.com/api/search/#geocoding'>
          Mapbox Geocoding API{' '}
        </a>
        .
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Then, I added the functionality for users to create routes. This was possible with 
        the &nbsp;
        <a href='https://docs.mapbox.com/api/navigation/#directions'>
          Mapbox Directions API{' '}
        </a>
        .
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Originally, the routing API requires users to manually input the starting and ending points 
        of the route. Since the requirement was to use the user's location as the starting point, I 
        inserted a request to get the user's current location. If the user allowed it, point A would 
        be the user's location; otherwise, it would be a fixed position - the metropolitan bus 
        station in the center of the region.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Another important function was to call a location via a button. I placed a button on all 
        locations that have a phone number listed. If the user is on the phone, they only need to 
        click the button to open the calling app with the location's number.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        The next Front-end Development task was to enable the user to know the current weather 
        conditions for their location. The forecast is provided by the Open Weather API. Currently, 
        it is still not possible to get conditions based on the user's location (I'm still working 
        on this). Therefore, it is displaying the current weather only for Florianópolis.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        The final development task was to publish Cities and Bikes. First, I needed to find a host 
        that supported https, since the connection needs to be secure for the site to store the 
        user's location. I decided to use &nbsp;
        <a href='/'>Netlify</a> because this service not only met the https support requirement but 
        was also very easy to publish and maintain the site.
      </p>
      <a
        className='btn btn-lg btn-outline-primary mb-4'
        href='https://cidadesebikes.netlify.app/'
        rel='noreferrer noopener'
        target='_blank'
        title='Open webapp in a new tab.'
      >
        CITIES & BIKES WEBAPP
      </a>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
];
