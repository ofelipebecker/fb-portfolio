import mainImage from "../assets/images/proj-vcx-dashboard/proj-vcx-dash-1.png";
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
        ],
        conclusion: "Conclusion for Project 1.",
    },
};

export default projects;
