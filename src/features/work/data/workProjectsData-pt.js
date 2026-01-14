import ctbCover from "../../../assets/images/proj-ctb/work-proj-ctb-cover.png";
import vcxDashCover from "../../../assets/images/proj-vcx-dashboard/work-proj-vcx-dashboard-cover.jpg";
import vcxTablesCover from "../../../assets/images/proj-vcx-tables/work-proj-vcx-tables-cover.png";

const workProjects = [
    {
        title: "Painel Geral - VC-X Sonar | Dashboard",
        imageSrc: vcxDashCover,
        tags: "JS | Chart.js | Day.js | Datatables.js | Bootstrap",
        url: "/work/project1",
    },
    {
        title: "Cidades & Bikes | Webapp/Mapa Interativo",
        imageSrc: ctbCover,
        tags: "JS | MapboxGL.js | Mapbox Directions API | Mapbox Geocoding API | OpenWeatherMap API",
        url: "/work/project2",
    },
    {
        title: "Padronização de Tabelas - VC-X Sonar | Tabelas",
        imageSrc: vcxTablesCover,
        tags: "JS | Datatables.js | Bootstrap",
        url: "/work/project3",
    },
];

const workProjectsLength = workProjects.length;

export { workProjectsLength };

export default workProjects;
