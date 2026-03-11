import ImageCarousel from '../../../../../components/ImageCarousel';
import SingleFigure from '../../../../../components/SingleFigure';
import SingleFigureModal from '../../../../../components/SingleFigureModal';

import DemoTable from '../en/DemoTable';

export const StepsContent = [
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        I researched articles and documents on table design to find good references and established, 
        tested best practices to follow.
      </p>
      <ul className='mb-5'>
        <li>
          <a href='https://m2.material.io/components/data-tables'>
            Material Design Data Tables
          </a>
        </li>
        <li>
          <a href='https://uxdesign.cc/data-table-for-enterprise-ux-cb48fb9fdf1e'>
            Article "Designing better data tables for enterprise UX" by Lalatendu Satpathy.
          </a>
        </li>
        <li>
          <a href='https://taras-bakusevych.medium.com/data-tables-design-3c705b106a64'>
            Article "Data Tables Design" by Taras Bakusevych.
          </a>
        </li>
      </ul>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4 text-nowrap'>
        I conducted a usability analysis of the tables following the&nbsp;
        <a
          href='https://www.nngroup.com/articles/ten-usability-heuristics/'
          rel='noreferrer'
          target='_blank'
          title='Open in new tab.'
        >
          heuristic evaluation
        </a>
        &nbsp;method by Nielsen.
      </p>
      <ImageCarousel id='vcxt-03' images={images} captions={captions} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        I added heatmap generation tools to VC-X Sonar. Initially, I used Matomo and later, Hotjar. 
        With these tools, I was able to perform analyses of click maps, mouse movement maps, and 
        scroll maps.
      </p>
      <SingleFigureModal
        modalId='vcxt-04-modal'
        image={images[0]}
        caption={captions[0]}
      />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Next, I worked on some hand-drawn sketches of alternatives for the new table standard.
      </p>
      <SingleFigure image={images[0]} alt={captions[0]} caption={captions[0]} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        Having completed the research and analysis of the current state, I defined design principles 
        for the Sonar tables. Some of these principles are:
      </p>
      <ul className='pl-4'>
        <li className='mb-2'>
          The table's core information should be in the first column.
        </li>
        <li className='mb-2'>
          In tables containing a "Status" column, this column should be the second one.
        </li>
        <li className='mb-2'>
          Alignment: primarily textual content should be left-aligned and primarily numerical 
          content should be right-aligned.
        </li>
        <li>Column headers must always be visible.</li>
      </ul>
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='mt-4'>
        With a table design standard defined, we began the implementation process using the 
        DatatablesJS library (and its various plugins) and Bootstrap. Special tables were also 
        implemented, following the same standard but developed using MJML for email delivery.
      </p>
      <ImageCarousel id='vcxt-07' images={images} captions={captions} />
    </>
  ),
  ({ captions = '', images }) => (
    <>
      <p className='my-4'>
        To demonstrate the implemented functionalities in practice, I developed this example table 
        using DataTables.js. Although the data is fictitious and follows an anonymization pattern 
        (CNPJs and names generated for demonstration), all interaction functionalities replicate the 
        standard established for the VC-X Sonar tables.
      </p>
      <div className='mt-5'>
        <DemoTable />
      </div>
    </>
  ),
];
