const CourseTable = ({ tableData }) => {
  const { headers, body } = tableData;

  return (
    <div className='table-responsive'>
      <table className='table table-hover table-striped text-start mb-0 text-purple'>
        <thead>
          <tr>
            {headers.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((item, index) => (
            <tr key={index}>
              <td>{item.course}</td>
              <td>{item.institution}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
