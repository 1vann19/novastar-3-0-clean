
/* =========================================
   NOVASTAR 3.0 CLEAN
   ROXIE — AI ASSISTANT MODULE
========================================= */

export function renderRoxiePage() {

    const roxieSections = [
        {
            id: 'ai-conversation',
            title: 'AI Conversation',
            description: 'Interact with Roxie and explore ideas through AI assistance.',
            symbol: '✧'
        },
        {
            id: 'study-assistant',
            title: 'Study Assistant',
            description: 'Get support with academic topics and learning activities.',
            symbol: '▤'
        },
        {
            id: 'learning-guidance',
            title: 'Learning Guidance',
            description: 'Explore explanations, recommendations and study guidance.',
            symbol: '⌖'
        },
        {
            id: 'conversation-history',
            title: 'Conversation History',
            description: 'Access and review your previous AI conversations.',
            symbol: '◷'
        }
    ];

    return `
        <section class="roxie-grid">

            <article class="card roxie-introduction">

                <div class="card-body">

                    <span class="roxie-main-symbol" aria-hidden="true">
                        ✧
                    </span>

                    <div>
                        <span class="badge badge-primary">
                            AI ASSISTANT
                        </span>

                        <h2>Meet Roxie</h2>

                        <p>
                            Your intelligent learning companion inside
                            the NOVASTAR platform.
                        </p>
                    </div>

                </div>

            </article>

            <section class="roxie-sections">

                ${roxieSections.map(section => `
                    <article
                        class="card roxie-section-card"
                        data-roxie-section="${section.id}"
                    >

                        <div class="card-body">

                            <span
                                class="roxie-section-symbol"
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

        </section>
    `;

}
