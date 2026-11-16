/* =========================================
   NOVASTAR 3.0 CLEAN
   PAGE RENDERER
========================================= */

import { renderPageTemplate } from './page-template.js';
import { renderHomePage } from '../modules/home/home.page.js';
import { renderAcademiesPage } from '../modules/academies/academies.page.js';
import { renderMyProgressPage } from '../modules/my-progress/my-progress.page.js';
import { renderActivityHubPage } from '../modules/activity-hub/activity-hub.page.js';
import { renderMyNotesPage } from '../modules/my-notes/my-notes.page.js';
import { renderResourcesPage } from '../modules/resources/resources.page.js';
import { renderGroupProjectsPage } from '../modules/group-projects/group-projects.page.js';
import { renderRoxiePage } from '../modules/roxie/roxie.page.js';
import { renderMissionsPage } from '../modules/missions/missions.page.js';

export function renderRoutePage(route) {

    if (!route) {

        return renderPageTemplate({
            eyebrow: 'NOVASTAR',
            title: 'Page not found',
            description: 'The requested page could not be found.',
            content: `
                <div class="card">
                    <div class="card-body">
                        <span class="badge badge-warning">
                            ERROR 404
                        </span>

                        <h2>Page unavailable</h2>

                        <p>
                            Please return to the Home section.
                        </p>

                        <a class="button button-primary" href="/">
                            Go to Home
                        </a>
                    </div>
                </div>
            `
        });

    }

    if (route.id === 'home') {

        return renderPageTemplate({
            eyebrow: 'NOVASTAR / HOME',
            title: 'Home',
            description: 'Your personal learning dashboard.',
            content: renderHomePage()
        });

    }

    if (route.id === 'academies') {

    return renderPageTemplate({
        eyebrow: 'NOVASTAR / ACADEMIES',
        title: 'Academies',
        description: 'Explore your learning areas and academic subjects.',
        content: renderAcademiesPage()
    });

}
if (route.id === 'my-progress') {

    return renderPageTemplate({
        eyebrow: 'NOVASTAR / MY PROGRESS',
        title: 'My Progress',
        description: 'Track your learning journey and academic achievements.',
        content: renderMyProgressPage()
    });

}
if (route.id === 'activity-hub') {

    return renderPageTemplate({
        eyebrow: 'NOVASTAR / ACTIVITY HUB',
        title: 'Activity Hub',
        description: 'Organize your academic activities and assignments.',
        content: renderActivityHubPage()
    });

}

if (route.id === 'my-notes') {

    return renderPageTemplate({
        eyebrow: 'NOVASTAR / MY NOTES',
        title: 'My Notes',
        description: 'Create, organize and manage your study notes.',
        content: renderMyNotesPage()
    });

}

if (route.id === 'resources') {
    return renderPageTemplate({
        eyebrow: 'NOVASTAR / RESOURCES',
        title: 'Resources',
        description: 'Explore, organize and access your learning materials.',
        content: renderResourcesPage()
    });
}

if (route.id === 'group-projects') {
    return renderPageTemplate({
        eyebrow: 'NOVASTAR / GROUP PROJECTS',
        title: 'Group Projects',
        description: 'Collaborate, organize tasks and manage team projects.',
        content: renderGroupProjectsPage()
    });
}

if (route.id === 'roxie') {
    return renderPageTemplate({
        eyebrow: 'NOVASTAR / ROXIE AI',
        title: 'Roxie',
        description: 'Your intelligent learning companion.',
        content: renderRoxiePage()
    });
}

if (route.id === 'missions') {
    return renderPageTemplate({
        eyebrow: 'NOVASTAR / MISSIONS',
        title: 'Missions',
        description: 'Discover challenges, complete activities and celebrate your achievements.',
        content: renderMissionsPage()
    });
}

    return renderPageTemplate({

        eyebrow: `NOVASTAR / ${route.title.toUpperCase()}`,

        title: route.title,

        description: route.description,

        content: `
            <div class="card">
                <div class="card-body">

                    <span class="badge badge-primary">
                        MODULE IN DEVELOPMENT
                    </span>

                    <h2>${route.title} Workspace</h2>

                    <p>
                        This section is being prepared
                        for the NOVASTAR 3.0 experience.
                    </p>

                </div>
            </div>
        `

    });

}
