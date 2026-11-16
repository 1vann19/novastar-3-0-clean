
/* =========================================
   NOVASTAR 3.0 CLEAN
   REUSABLE PAGE TEMPLATE
========================================= */

export function renderPageTemplate({
    eyebrow = 'NOVASTAR WORKSPACE',
    title = 'Welcome',
    description = '',
    content = ''
} = {}) {

    return `
        <div class="page-container">

            <header class="page-header">

                <span class="page-header-eyebrow">
                    ${eyebrow}
                </span>

                <h1>${title}</h1>

                <p>${description}</p>

            </header>

            <section
                class="page-content"
                aria-label="${title}"
            >
                ${content}
            </section>

        </div>
    `;

}
