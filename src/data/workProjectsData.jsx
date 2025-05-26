import ctbCover from "../assets/images/proj-ctb/work-proj-ctb-cover.png";
import vcxDashCover from "../assets/images/proj-vcx-dashboard/work-proj-vcx-dashboard-cover.jpg";
import vcxKanbanCover from "../assets/images/proj-vcx-kanban/work-proj-vcx-kanban-cover.png";
import vcxTablesCover from "../assets/images/proj-vcx-tables/work-proj-vcx-tables-cover.png";

const workProjects = [
    {
        title: "Painel Geral - VC-X Sonar | Dashboard",
        imageSrc: vcxDashCover,
        tags: "JS | Chart.js | Day.js | Datatables.js | Bootstrap",
        url: "/work/project1",
        disabled: false,
    },
    {
        title: "Cidades & Bikes | Webapp/Mapa Interativo",
        imageSrc: ctbCover,
        tags: "JS | MapboxGL.js | Mapbox Directions API | Mapbox Geocoding API | OpenWeatherMap API",
        url: "/work/project2",
        disabled: false,
    },
    {
        title: "Padronização de Tabelas - VC-X Sonar | Tabelas",
        imageSrc: vcxTablesCover,
        tags: "JS | Datatables.js | Bootstrap",
        url: "/work/project3",
        disabled: true,
    },
    {
        title: "Refatoração de Kanbans - VC-X Flow | Kanbans/Accordions",
        imageSrc: vcxKanbanCover,
        tags: "JS | Vue.js | Bootstrap",
        url: "/work/project4",
        disabled: true,
    },
];

export default workProjects;
