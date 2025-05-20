import mainImage from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-1.png";
import image1STCardTabs from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-5-1-bs-tabs.png";
import image1STCardChart from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-5-2-chart.png";
import imageHeatmap from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-3-heatmap.jpg";
import imageOtherCardsTabsAndCharts from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-7-other-charts-tabs.png";
import imageOtherCardsTables from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-8-other-charts-tables.png";
import imagePeriodSelector from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-6-period-selector.png";
import imageSketch from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-4-sketch-1.jpg";
import imageS2 from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-2-0.png";

const projects = {
    project1: {
        title: "Painel Geral VC-X Sonar",
        image: mainImage,
        intro: `
            VC-X Sonar is a platform that aims to simplify the automation,
            acquisition and management of Telecom and IT for companies,
            generating vision, control and savings. The new dashboard goal
            is to show, in a simplified and interactive way, useful information
            about consumption, costs and resources of Telecom and IT of the
            clients. My role was designing, and developing the
            dashboard interface.
        `,
        steps: [
            {
                title: "Pesquisa e Análise",
                subtitle: "Briefing",
                content: (
                    <>
                        <p className="my-4">
                            At the beginning of the project, I wrote a basic
                            description of the problem and listed the activities
                            that I would do. I had a meeting with the CTO and
                            the Head of the team, to help come up with this
                            description.
                        </p>
                        <blockquote className="blockquote ps-5">
                            <p className="my-4">
                                <em>
                                    [...] the home screen of VC-X Sonar, the
                                    Telecom Dashboard can be misunderstood as a
                                    main dashboard, causing only information
                                    from one module (Telecom) to be seen and
                                    “hiding” information from other modules
                                    (Financial and Resources/People). It was
                                    even reported that customers had not
                                    realized the existence of the other
                                    dashboards.
                                </em>
                            </p>
                            <p>
                                <em>
                                    Another point raised by internal customers
                                    was that the dashboards currently present
                                    information in short periods of time (per
                                    month). Consequently, it is difficult to see
                                    data from longer periods and make
                                    comparisons among periods (e.g. differences
                                    between months over a year).
                                </em>
                            </p>
                            <footer className="blockquote-footer">
                                Above an excerpt from the basic description of
                                the problem.
                            </footer>
                        </blockquote>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Goals and Strategies Definition",
                content: (
                    <>
                        <p className="my-4">
                            Based on the information from the previous steps, I
                            organized a table of goals and strategies. Some of
                            the goals and strategies:
                        </p>

                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th colSpan="3">Primary Goal</th>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        Displaying a summarized visualization of
                                        the most relevant information from each
                                        Sonar module.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Secondary Goals</th>
                                    <th>Restrictions and Problems</th>
                                    <th>Strategies</th>
                                </tr>
                                <tr>
                                    <td>
                                        Show information from each of the three
                                        Sonar modules in a balanced way.
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Some modules have much more
                                                content than others.
                                            </li>
                                            <li>
                                                Difficult to connect the main
                                                dashboard and individual module
                                                dashboards.
                                            </li>
                                            <li>
                                                Redundant if reusing data
                                                already displayed elsewhere.
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Organize the grid to show all
                                                modules without scrolling.
                                            </li>
                                            <li>
                                                Divide space evenly among
                                                modules.
                                            </li>
                                            <li>
                                                Redesign modules later based on
                                                this dashboard.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Make it simple to understand changes in
                                        information over time periods longer
                                        than a month.
                                    </td>
                                    <td>
                                        In some cases, a monthly view makes more
                                        sense (e.g., billing).
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Default to three-month view.
                                            </li>
                                            <li>
                                                Allow switching to 1, 6, and 12
                                                months.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Competitor Analysis",
                content: (
                    <>
                        <p className="my-4">
                            In this step, I searched and evaluated seven web
                            softwares that contain dashboards. Those softwares
                            are competitors of VC-X Sonar or have some
                            similarity with. My goal was to find good references
                            for our dashboard, on content organization and
                            features. Analyzed softwares: Google Analytics,
                            Conta Azul, Conta Mínima, Meu Dinheiro Invest,
                            Mobills, Quick Books and Sistema Soma.
                        </p>
                    </>
                ),
                image: [imageS2],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Referências de Design para Dashboards",
                content: (
                    <>
                        <p className="my-4">
                            Next, I looked for articles and design guides. I
                            wanted to find references and proven/tested design
                            practices, to support the decisions we would take in
                            the project. The references:
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    Article 10 rules for better dashboard
                                    design;
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.toptal.com/designers/data-visualization/dashboard-design-best-practices"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    Article Dashboard Design - Considerations
                                    and Best Practices;
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://usabilitygeek.com/dashboard-design-user-experience-guidelines/"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    Article Dashboard Design User Experience
                                    Guidelines;
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://material.io/design/communication/data-visualization.html"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    Data visualization Principle Guide, from
                                    Material Design;
                                </a>
                            </li>
                        </ul>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Entrevistas com Stakeholders",
                content: (
                    <>
                        <p className="my-4">
                            Subsequently, I interviewed four stakeholders who
                            have direct contact with customers. The goal was to
                            collect feedback they received from customers about
                            the VC-X Sonar. Also, I wanted to have an idea of
                            each stakeholder's view of what information was
                            relevant to be on the dashboard. I recorded and
                            analyzed the interviews, to summarize and organize
                            the ideas presented.
                        </p>
                        <p className="my-4">
                            Interviewees: Rodrigo Bedete (Solutions Head),
                            Marina Turrisi (Client Success Analist), João Plentz
                            (Chief Operating Officer) and Alexandre Kellermann
                            (Client Success Analist).
                        </p>
                    </>
                ),
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Análise de Mapas de Calor",
                content: (
                    <>
                        <p className="my-4">
                            Then, with the heatmaps tool from Hotjar, I analyzed
                            several VC-X Sonar screens. My goal was trying to
                            understand which information the users considered
                            most important. I focused on the click maps and
                            cursor movement maps.
                        </p>
                    </>
                ),
                image: [imageHeatmap],
            },
            {
                title: "Pesquisa e Análise",
                subtitle: "Definição de Objetivos e Estratégias",
                content: (
                    <>
                        <p className="my-4">
                            Based on the information from the previous steps, I
                            organized a table of goals and strategies. Some of
                            the goals and strategies:
                        </p>
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th colSpan="3">Primary Goal</th>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        Displaying a summarized visualization of
                                        the most relevant information from each
                                        Sonar module.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Secondary Goals</th>
                                    <th>Restrictions and Problems</th>
                                    <th>Strategies</th>
                                </tr>
                                <tr>
                                    <td>
                                        Show information from each of the three
                                        Sonar modules in a balanced way.
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Some modules have much more
                                                content than others.
                                            </li>
                                            <li>
                                                It is difficult to make a
                                                connection between the content
                                                of the main dashboard and the
                                                content of the dashboards of
                                                each module.
                                            </li>
                                            <li>
                                                Including data already displayed
                                                in the dashboards of each
                                                module, might make them look
                                                redundant.
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                Organize the grid so that the
                                                existence of the different
                                                modules is already visible
                                                without scrolling.
                                            </li>
                                            <li>
                                                Divide as equally as possible
                                                the space given to each module
                                                content.
                                            </li>
                                            <li>
                                                Create a separate task, at
                                                another time, to redesign the
                                                dashboards of each module, based
                                                on the main dashboard.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Make it simple to understand changes in
                                        information over time periods longer
                                        than a month.
                                    </td>
                                    <td>
                                        In some data it makes more sense to have
                                        a monthly view (ex: billing due date).
                                    </td>
                                    <td>
                                        <ul className="pl-4">
                                            <li>
                                                By default, display information
                                                in three-months periods.
                                            </li>
                                            <li>
                                                Allow the user to change to 1
                                                month, 6 months and 12 months
                                                periods.
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ),
            },
            {
                title: "Modelagem",
                subtitle: "Definição de Conteúdo",
                content: (
                    <>
                        <p className="my-4">
                            Having the objectives and strategies as a guide, I
                            listed the information that would be displayed on
                            the dashboard.
                        </p>
                    </>
                ),
            },
            {
                title: "Modelagem",
                subtitle: "Desenhos de Alternativas",
                content: (
                    <>
                        <p className="my-4"></p>
                    </>
                ),
                image: [imageSketch],
            },
            {
                title: "Modelagem",
                subtitle: "Desenho de Protótipo",
                content: (
                    <>
                        <p className="mt-4 mb-2">
                            Then, I selected the ideas that were best suited to
                            the goals and strategies of the project. I organized
                            a prototype of the interface and with some basic
                            interactions, using Adobe XD. I presented the
                            prototype to the development team to get some
                            feedback. Based on their feedback, I did some
                            adjustments to the prototype.
                        </p>
                        <p className="mt-4 mb-0">
                            Click or scroll to interact with the prototype or:{" "}
                            <a
                                className="btn btn-lg btn-link"
                                href="https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen"
                                rel="noreferrer noopener"
                                target="_blank"
                                title="Open prototype in a new tab."
                            >
                                Abra o protótipo em nova aba
                            </a>
                        </p>
                        <div class="ratio ratio-16x9">
                            <iframe
                                className="border"
                                rel="noreferrer noopener"
                                src="https://xd.adobe.com/embed/29f5b877-c8d1-4d98-aa54-0768f5f2bcce-7ca6/?fullscreen"
                                title="Prototype."
                                allowFullScreen
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    overflow: "auto",
                                }}
                                scrolling="yes"
                            ></iframe>
                        </div>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the First Card",
                content: (
                    <>
                        <p className="my-4">
                            The cards have many elements in common - such as tab
                            structure, charts, and period switch selectors. We
                            divided the implementation into two tasks:
                            development of the first card and development of the
                            remaining cards. That way, we could review and
                            adjust the html/css/js structure on the first card,
                            and then replicate that structure on the other
                            cards.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the First Card - Bootstrap 4 Tabs",
                content: (
                    <>
                        <p className="my-4">
                            Starting the development phase, I implemented the
                            basic structure with the components of Cards and
                            Tabs from Bootstrap 4.
                        </p>
                    </>
                ),
                image: [image1STCardTabs],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the First Card - Charts",
                content: (
                    <>
                        <p className="my-4">
                            We tested a series of chart libraries to define
                            which would best fit the needs of the project. We
                            decided on ChartJs, as it provides a good
                            quantity/quality of charts, and it is easy to
                            develop. Also, ChartJs has a more complete
                            documentation. I implemented three bar charts to
                            display the total consumption of Mobile Data, Voice
                            and SMS.
                        </p>
                    </>
                ),
                image: [image1STCardChart],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the First Card - Ajax Requests",
                content: (
                    <>
                        <p className="my-4">
                            Together with the developer Gustavo Presa, I
                            implemented the ajax requests to retrieve the charts
                            data from the database.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the First Card - Period Selection",
                content: (
                    <>
                        <p className="my-4">
                            One of the project requirements was allowing users
                            to visualize data from different periods on the
                            charts (3, 6 or 12 months). So, I developed a period
                            selector to perform that interaction on the charts.
                            To handle date and time information, I used the
                            DayJs library.
                        </p>
                    </>
                ),
                image: [imagePeriodSelector],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Revisão de Código",
                content: (
                    <>
                        <p className="my-4">
                            After finishing the implementation of the first
                            card, I opened the Pull Request. The developers Hugo
                            Santos and Gustavo Presa reviewed the code. After
                            some adjustments, I started the second task, for the
                            development of the other cards.
                        </p>
                    </>
                ),
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the Other Cards - Tabs and Charts",
                content: (
                    <>
                        <p className="my-4">
                            Following the same structure of cards, tabs and
                            charts validated in the previous step, I implemented
                            the other cards in the dashboard.
                        </p>
                    </>
                ),
                image: [imageOtherCardsTabsAndCharts],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the Other Cards - Tables",
                content: (
                    <>
                        <p className="my-4">
                            Some of the cards have information displayed in
                            tables. I implemented these tables with html,
                            Bootstrap 4 css classes and ajax requests to
                            retrieve the data from the database.
                        </p>
                    </>
                ),
                image: [imageOtherCardsTables],
            },
            {
                title: "Desenvolvimento",
                subtitle: "Development of the Other Cards - Code Review",
                content: (
                    <>
                        <p className="my-4">
                            The last step was to open a Pull Request for the
                            task. One more time the developers Hugo Santos and
                            Gustavo Presa reviewed the code. Again, I made some
                            adjustments. Next, we published the dashboard in
                            homologation, so stakeholders and coworkers could
                            test it. We collected their feedback and I made
                            minor adjustments, before publishing the dashboard
                            for real users.
                        </p>
                    </>
                ),
            },
        ],
        conclusion: (
            <>
                <div class="ratio ratio-16x9">
                    <iframe
                        src="https://www.youtube.com/embed/XVcYAwtsil8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="my-4">
                    The development of the dashboard presented considerable
                    complexity. The decision of splitting the implementation
                    into two parts proved to be a great success. We focused on
                    one card, validated the structure and then replicated it on
                    the other cards. We probably avoided the code review from
                    taking much longer, as many problems would be similar. Thus,
                    in the second task, less adjustments were necessary.
                </p>
                <p className="my-4">
                    My biggest challenge in this project was working with two
                    libraries I didn't know yet, ChartJs and DayJs. The period
                    exchange of chart data is one of the most important features
                    of the dashboard, so understanding how to relate the two
                    libraries took considerable effort.
                </p>
                <p className="my-4">
                    What I liked most about this project was implementing the
                    charts with ChartJs. I'm very interested in the data
                    visualization area and I had already studied another
                    library, D3. However, I found development with ChartJs
                    simpler and more fun, both because of the structure of the
                    library and the quality of the documentation. I intend to
                    continue studying and working with ChartJs.
                </p>
            </>
        ),
    },
};

export default projects;
