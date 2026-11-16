
/* =========================================
   NOVASTAR 3.0 CLEAN
   GROUP PROJECTS MODULE
========================================= */

export function renderGroupProjectsPage() {

    const projectSections = [
        {
            id: 'my-projects',
            title: 'My Projects',
            description: 'View and manage your collaborative projects.',
            symbol: '▤'
        },
        {
            id: 'team-workspace',
            title: 'Team Workspace',
            description: 'Collaborate with teammates in a shared workspace.',
            symbol: '⌘'
        },
        {
            id: 'project-tasks',
            title: 'Project Tasks',
            description: 'Organize responsibilities and track project activities.',
            symbol: '☑'
        },
        {
            id: 'project-progress',
            title: 'Project Progress',
            description: 'Follow your team progress and project milestones.',
            symbol: '↗'
        }
    ];

    return `
        <section class="group-projects-grid">

            ${projectSections.map(section => `
                <article
                    class="card group-project-section-card"
                    data-project-section="${section.id}"
                >

                    <div class="card-body">

                        <span
                            class="group-project-section-symbol"
                            aria-hidden="true"
                        >
                            ${section.symbol}
                        </span>

                        <h2>${section.title}</h2>

                        <p>${section.description}</p>

                        <span class="badge badge-primary">
                            COMING SOON
                        </span>

                    </div>

                </article>
            `).join('')}

        </section>
    `;

}
