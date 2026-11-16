
/* =========================================
   NOVASTAR 3.0 CLEAN
   RESOURCES MODULE
========================================= */

export function renderResourcesPage() {

    const resourceSections = [
        {
            id: 'learning-library',
            title: 'Learning Library',
            description: 'Explore educational content and learning materials.',
            symbol: '▤'
        },
        {
            id: 'study-materials',
            title: 'Study Materials',
            description: 'Access guides, documents and academic materials.',
            symbol: '▧'
        },
        {
            id: 'shared-resources',
            title: 'Shared Resources',
            description: 'Discover resources shared by the learning community.',
            symbol: '⇄'
        },
        {
            id: 'saved-resources',
            title: 'Saved Resources',
            description: 'Keep useful learning materials organized in one place.',
            symbol: '☆'
        }
    ];

    return `
        <section class="resources-grid">

            ${resourceSections.map(section => `
                <article
                    class="card resource-section-card"
                    data-resource-section="${section.id}"
                >

                    <div class="card-body">

                        <span
                            class="resource-section-symbol"
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
