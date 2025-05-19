import ProjectLink from "../components/ProjectLink";

import ctbCover from "../assets/images/proj-ctb/work-proj-ctb-cover.png";
import vcxDashCover from "../assets/images/proj-vcx-dashboard/work-proj-vcx-dashboard-cover.jpg";
import vcxTablesCover from "../assets/images/proj-vcx-tables/work-proj-vcx-tables-cover.png";

const Work = () => {
    const projects = [
        {
            title: "Cidades & Bikes | Webapp/Mapa Interativo",
            imageSrc: ctbCover,
            tags: "JS | MapboxGL.js | Mapbox Directions API | Mapbox Geocoding API | OpenWeatherMap API",
            url: "/work/project1",
        },
        {
            title: "Painel Geral - VC-X Sonar | Dashboard",
            imageSrc: vcxDashCover,
            tags: "JS | Chart.js | Day.js | Datatables.js | Bootstrap",
            url: "/work/project2",
        },
        {
            title: "Padronização de Tabelas - VC-X Sonar | Tabelas",
            imageSrc: vcxTablesCover,
            tags: "JS | Datatables.js | Bootstrap",
            url: "/work/project3",
        },
        {
            title: "Refatoração de Kanbans - VC-X Flow | Kanbans/Accordions",
            imageSrc: "https://via.placeholder.com/800x200?text=Project+4",
            tags: "JS | Vue.js | Bootstrap",
            url: "/work/project4",
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-10 offset-md-1 mt-5">
                    <h1>Projetos</h1>
                    {projects.map((project, index) => (
                        <ProjectLink
                            key={index}
                            title={project.title}
                            imageSrc={project.imageSrc}
                            tags={project.tags}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
