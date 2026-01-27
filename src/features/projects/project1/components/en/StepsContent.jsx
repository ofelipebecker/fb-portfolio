import SingleFigure from "../../../../../components/SingleFigure";

export const StepsContent = [
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        At the beginning of the project, I wrote a basic description of the problem and listed the 
        activities that I would do. I had a meeting with the CTO and the Head of the team, to help 
        come up with this description.
      </p>
      <blockquote className='blockquote px-5 mb-0'>
        <p className='my-4'>
          <em>
            [...] the home screen of VC-X Sonar, the Telecom Dashboard can be misunderstood as a 
            main dashboard, causing only information from one module (Telecom) to be seen and 
            “hiding” information from other modules (Financial and Resources/People). It was even 
            reported that customers had not realized the existence of the other dashboards.
          </em>
        </p>
        <p>
          <em>
            Another point raised by internal customers was that the dashboards currently present 
            information in short periods of time (per month). Consequently, it is difficult to see 
            data from longer periods and make comparisons among periods (e.g. differences between 
            months over a year).
          </em>
        </p>
        <footer className='blockquote-footer'>
          Above an excerpt from the basic description of the problem.
        </footer>
      </blockquote>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        In this step, I searched and evaluated seven web softwares that
        contain dashboards. Those softwares are competitors of VC-X Sonar or
        have some similarity with. My goal was to find good references for
        our dashboard, on content organization and features. Analyzed
        softwares: Google Analytics, Conta Azul, Conta Mínima, Meu Dinheiro
        Invest, Mobills, Quick Books and Sistema Soma.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-0'>
        Subsequently, I interviewed four stakeholders who have direct
        contact with customers. The goal was to collect feedback they
        received from customers about the VC-X Sonar. Also, I wanted to have
        an idea of each stakeholder's view of what information was relevant
        to be on the dashboard. I recorded and analyzed the interviews, to
        summarize and organize the ideas presented.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Then, with the heatmaps tool from Hotjar, I analyzed several VC-X Sonar
        screens. My goal was trying to understand which information the users
        considered most important. I focused on the click maps and cursor
        movement maps.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Based on the information from the previous steps, I organized a table of
        goals and strategies. Some of the goals and strategies:
      </p>
      <table className='table table-hover mb-0'>
        <tbody>
          <tr>
            <th colSpan='3'>Primary Goal</th>
          </tr>
          <tr>
            <td colSpan='3'>
              Displaying a summarized visualization of the most relevant
              information from each Sonar module.
            </td>
          </tr>
          <tr>
            <th>Secondary Goals</th>
            <th>Restrictions and Problems</th>
            <th>Strategies</th>
          </tr>
          <tr>
            <td>
              Show information from each of the three Sonar modules in a
              balanced way.
            </td>
            <td>
              <ul className='pl-4'>
                <li>Some modules have much more content than others.</li>
                <li>
                  It is difficult to make a connection between the content
                  of the main dashboard and the content of the dashboards
                  of each module.
                </li>
                <li>
                  Including data already displayed in the dashboards of
                  each module, might make them look redundant.
                </li>
              </ul>
            </td>
            <td>
              <ul className='pl-4'>
                <li>
                  Organize the grid so that the existence of the different
                  modules is already visible without scrolling.
                </li>
                <li>
                  Divide as equally as possible the space given to each
                  module content.
                </li>
                <li>
                  Create a separate task, at another time, to redesign the
                  dashboards of each module, based on the main dashboard.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              Make it simple to understand changes in information over time
              periods longer than a month.
            </td>
            <td>
              In some data it makes more sense to have a monthly view
              (ex: billing due date).
            </td>
            <td>
              <ul className='pl-4'>
                <li>
                  By default, display information in three-months periods.
                </li>
                <li>
                  Allow the user to change to 1 month, 6 months and 12
                  months periods.
                </li>
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
        Having the objectives and strategies as a guide, I listed the
        information that would be displayed on the dashboard.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        With paper and pencil, I sketched a series of drawings to generate various alternative for 
        the dashboard interface.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4 mb-2'>
        Then, I selected the ideas that were best suited to the goals and
        strategies of the project. I organized a prototype of the interface and
        with some basic interactions, using Adobe XD. I presented the prototype
        to the development team to get some feedback. Based on their feedback, I
        did some adjustments to the prototype.
      </p>
      <p className='mt-4 mb-0'>
        Click or scroll to interact with the prototype or:
        <a
          className='btn btn-lg btn-link'
          href='https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen'
          rel='noreferrer noopener'
          target='_blank'
        >
          Open the prototype in a new tab
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
        The cards have many elements in common - such as tab structure, charts,
        and period switch selectors. We divided the implementation into two
        tasks: development of the first card and development of the remaining
        cards. That way, we could review and adjust the html/css/js structure on
        the first card, and then replicate that structure on the other cards.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Starting the development phase, I implemented the basic structure with the components of 
        Cards and Tabs from Bootstrap 4.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        We tested a series of chart libraries to define which would best fit the
        needs of the project. We decided on Chart.js, as it provides a good
        quantity/quality of charts, and it is easy to develop. Also, Chart.js has
        a more complete documentation. I implemented three bar charts to display
        the total consumption of Mobile Data, Voice and SMS.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        Together with the developer Gustavo Presa, I implemented the ajax
        requests to retrieve the charts data from the database.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        One of the project requirements was allowing users to visualize data
        from different periods on the charts (3, 6 or 12 months). So, I
        developed a period selector to perform that interaction on the charts.
        To handle date and time information, I used the Day.js library.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        After finishing the implementation of the first card, I opened the Pull
        Request. The developers Hugo Santos and Gustavo Presa reviewed the code.
        After some adjustments, I started the second task, for the development
        of the other cards.
      </p>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Following the same structure of cards, tabs and charts validated in the
        previous step, I implemented the other cards in the dashboard.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        Some of the cards have information displayed in tables. I implemented
        these tables with html, Bootstrap 4 css classes and ajax requests to
        retrieve the data from the database.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mb-0 mt-4'>
        The last step was to open a Pull Request for the task. One more time the
        developers Hugo Santos and Gustavo Presa reviewed the code. Again, I
        made some adjustments. Next, we published the dashboard in homologation,
        so stakeholders and coworkers could test it. We collected their feedback
        and I made minor adjustments, before publishing the dashboard for real
        users.
      </p>
    </>
  ),
];
