/* =========================================
   NOVASTAR 3.0 CLEAN
   PAGE CONTROLLER
========================================= */

import { initializeRouter } from './router.js';
import { renderRoutePage } from '../../pages/page-renderer.js';
import { initializeNotesController } from '../../modules/my-notes/notes.controller.js';
import { initializeAcademiesController } from '../../modules/academies/academies.controller.js';
import { initializeProgressController } from '../../modules/my-progress/progress.controller.js';

export function initializePageController() {

    const pageContainer = document.querySelector('#page-content');

    if (!pageContainer) {
        throw new Error(
            'NOVASTAR: Page container #page-content was not found.'
        );
    }

    const cleanupRouter = initializeRouter((route) => {

        pageContainer.innerHTML = renderRoutePage(route);

        if (route?.id === 'my-notes') {
    initializeNotesController();
}

if (route?.id === 'academies') {
    initializeAcademiesController();
}

if (route?.id === 'my-progress') {
    initializeProgressController();
}

    });

    return cleanupRouter;

}
