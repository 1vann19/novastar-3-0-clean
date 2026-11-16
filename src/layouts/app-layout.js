/* =========================================
   NOVASTAR 3.0 CLEAN
   APPLICATION LAYOUT
========================================= */

import { NAVIGATION_CONFIG } from '../app/navigation/navigation.config.js';

const ICONS = {
    house: '⌂',
    'graduation-cap': '◇',
    'chart-no-axes-combined': '↗',
    'calendar-days': '▦',
    'notebook-pen': '▤',
    library: '▥',
    users: '♧',
    sparkles: '✦',
    trophy: '♜'
};

function renderNavigation() {
    return NAVIGATION_CONFIG.map(group => {
        const items = group.items
            .filter(item => item.roles.includes('student'))
            .map(item => `
                <a
                    class="sidebar-link"
                    href="${item.href}"
                    data-route="${item.id}"
                    ${item.id === 'home' ? 'aria-current="page"' : ''}
                >
                    <span class="sidebar-link-icon" aria-hidden="true">
                        ${ICONS[item.icon] || '•'}
                    </span>

                    <span class="sidebar-link-label">
                        ${item.label}
                    </span>
                </a>
            `).join('');

        if (!items) return '';

        return `
            <section class="sidebar-group">
                <h2 class="sidebar-group-label">${group.label}</h2>
                <nav class="sidebar-group-navigation">
                    ${items}
                </nav>
            </section>
        `;
    }).join('');
}

export function renderAppLayout() {
    const navigation = renderNavigation();

    return `
        <div class="app-shell">

            <aside class="app-sidebar">
                <div class="sidebar-header">
                    <a class="sidebar-brand" href="/" aria-label="NOVASTAR Home">
                        <span class="sidebar-brand-symbol">✦</span>
                        <span class="sidebar-brand-name">NOVASTAR</span>
                    </a>
                </div>

                <div class="sidebar-navigation">
                    ${navigation}
                </div>

                <div class="sidebar-footer">
                    <span>VERSION 3.0</span>
                </div>
            </aside>

            <div class="app-main">

                <header class="app-topbar">
                    <div class="topbar-left">
                        <span class="topbar-section-name">Workspace</span>
                    </div>

                    <div class="topbar-center">
                        <label class="topbar-search">
                            <span aria-hidden="true">⌕</span>
                            <input
                                type="search"
                                placeholder="Search NOVASTAR..."
                                aria-label="Search NOVASTAR"
                            >
                        </label>
                    </div>

                    <div class="topbar-right">
                        <button
                            class="topbar-action"
                            type="button"
                            aria-label="Notifications"
                        >
                            ♧
                        </button>

                        <button
                            class="topbar-profile"
                            type="button"
                            aria-label="User profile"
                        >
                            S
                        </button>
                    </div>
                </header>

                <main class="app-content" id="page-content">
                    <section class="page-header">
                        <span class="page-header-eyebrow">YOUR LEARNING SPACE</span>
                        <h1>Welcome to NOVASTAR</h1>
                        <p>
                            Your learning universe starts here.
                        </p>
                    </section>

                    <section class="dashboard-content" aria-label="Dashboard">
                        <div class="card">
                            <div class="card-body">
                                <span class="badge badge-primary">NOVASTAR 3.0</span>
                                <h2>Your workspace is ready</h2>
                                <p>
                                    Your learning journey begins here.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

            </div>

            <nav class="mobile-navigation" aria-label="Mobile navigation">
                ${NAVIGATION_CONFIG
                    .flatMap(group => group.items)
                    .filter(item => item.roles.includes('student'))
                    .slice(0, 5)
                    .map(item => `
                        <a
                            class="mobile-navigation-link"
                            href="${item.href}"
                            data-route="${item.id}"
                        >
                            <span aria-hidden="true">
                                ${ICONS[item.icon] || '•'}
                            </span>
                            <span>${item.label}</span>
                        </a>
                    `).join('')}
            </nav>

        </div>
    `;
}
