const CourseTable = () => {
    const cursos = [
        {
            course: "Bacharelado em Design",
            institution: "UFSC",
            date: "2008 - 2014",
        },
        {
            course: "JavaScript Algorithms and Data Structures Certification",
            institution: "FreeCodeCamp",
            date: "2020",
        },
        {
            course: "Front End Development Libraries (React + Redux)",
            institution: "FreeCodeCamp",
            date: "Em andamento",
        },
        {
            course: "EnglishScore Proficiency - Level CEFR C1",
            institution: "British Council",
            date: "2020",
        },
    ];

    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped text-start mb-0 text-purple">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Instituição</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((item, index) => (
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
