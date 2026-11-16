/* =========================================
   NOVASTAR 3.0 CLEAN
   ACADEMIES CONTROLLER
========================================= */

import { searchAcademies } from './academies.service.js';

export function initializeAcademiesController() {

    const searchInput = document.querySelector('#academies-search');
    const categoryFilter = document.querySelector('#academies-category');
    const academiesGrid = document.querySelector('#academies-grid');
    const emptyMessage = document.querySelector('#academies-empty');
    const resultsCount = document.querySelector('#academies-results-count');

    if (!searchInput || !academiesGrid || !emptyMessage) {
        return;
    }

    function renderAcademies(query = '') {

        let academies = searchAcademies(searchInput.value);

if (categoryFilter && categoryFilter.value !== 'all') {
    academies = academies.filter(
        academy => academy.category === categoryFilter.value
    );
}

        academiesGrid.innerHTML = academies.map(academy => `
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
        `).join('');

        emptyMessage.hidden = academies.length > 0;
        academiesGrid.hidden = academies.length === 0;
                if (resultsCount) {
            resultsCount.textContent = academies.length === 1
                ? '1 academy available'
                : `${academies.length} academies available`;
        }
    }

   searchInput.addEventListener('input', () => {
    renderAcademies();
});

if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
        renderAcademies();
    });
}

    renderAcademies();
}
