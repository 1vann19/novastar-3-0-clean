/* =========================================
   NOVASTAR 3.0 CLEAN
   ACADEMIES MODULE
========================================= */

import { getAllAcademies } from './academies.service.js';

export function renderAcademiesPage() {

    const academies = getAllAcademies();

    return `
        <section class="academies-workspace">

            <div class="academies-toolbar">

                <div>
                    <h2>Explore Academies</h2>
                    <p>Find a learning area that interests you.</p>
                </div>

                <label class="academies-search">
                    <span class="visually-hidden">
                        Search academies
                    </span>

                    <input
                        type="search"
                        id="academies-search"
                        placeholder="Search academies..."
                        autocomplete="off"
                    >
                </label>

            </div>

            <section
                class="academies-grid"
                id="academies-grid"
                aria-live="polite"
            >

            <div class="academies-results">
    <span id="academies-results-count">
        4 academies available
    </span>
</div>

                ${academies.map(academy => `
                    <article
                        class="card academy-card"
                        data-academy="${academy.id}"
                    >

                        <div class="card-body">

                            <span class="academy-symbol" aria-hidden="true">
                                ${academy.symbol}
                            </span>

                            <h2>${academy.name}</h2>

                            <p>${academy.description}</p>

                            <span class="badge badge-primary">
                                COMING SOON
                            </span>

                        </div>

                    </article>
                `).join('')}

            </section>

            <p
                class="academies-empty"
                id="academies-empty"
                hidden
            >
                No academies found.
            </p>

        </section>
    `;
}
