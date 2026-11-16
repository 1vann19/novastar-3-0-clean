
/* =========================================
   NOVASTAR 3.0 CLEAN
   MISSIONS MODULE
========================================= */

export function renderMissionsPage() {

    const missionSections = [
        {
            id: 'available-missions',
            title: 'Available Missions',
            description: 'Explore new academic challenges and learning activities.',
            symbol: '◎'
        },
        {
            id: 'active-missions',
            title: 'Active Missions',
            description: 'Continue working on your current learning challenges.',
            symbol: '◈'
        },
        {
            id: 'completed-missions',
            title: 'Completed Missions',
            description: 'Review the missions you have successfully completed.',
            symbol: '✓'
        },
        {
            id: 'mission-rewards',
            title: 'Rewards & Achievements',
            description: 'Discover the achievements earned through your progress.',
            symbol: '☆'
        }
    ];

    return `
        <section class="missions-grid">

            ${missionSections.map(section => `
                <article
                    class="card mission-section-card"
                    data-mission-section="${section.id}"
                >

                    <div class="card-body">

                        <span
                            class="mission-section-symbol"
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
