
/* =========================================
   NOVASTAR 3.0 CLEAN
   ACTIVITY HUB MODULE
========================================= */

export function renderActivityHubPage() {

    const activitySections = [
        {
            id: 'my-assignments',
            title: 'My Assignments',
            description: 'Organize your academic tasks and assignments.',
            symbol: '▤'
        },
        {
            id: 'calendar',
            title: 'Calendar',
            description: 'Keep track of important dates and deadlines.',
            symbol: '▦'
        },
        {
            id: 'upcoming-activities',
            title: 'Upcoming Activities',
            description: 'Review your upcoming academic activities.',
            symbol: '◷'
        },
        {
            id: 'completed-tasks',
            title: 'Completed Tasks',
            description: 'Keep a record of your completed activities.',
            symbol: '✓'
        }
    ];

    return `
        <section class="activity-grid">

            ${activitySections.map(section => `
                <article
                    class="card activity-section-card"
                    data-activity-section="${section.id}"
                >

                    <div class="card-body">

                        <span
                            class="activity-section-symbol"
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
