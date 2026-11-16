
import './styles/main.css';

import { NOVASTAR } from './app/app.js';
import { renderAppLayout } from './layouts/app-layout.js';
import { initializePageController } from './app/navigation/page-controller.js';

/* =========================================
   NOVASTAR 3.0
   APPLICATION ENTRY POINT
========================================= */

NOVASTAR.initialize();

const app = document.querySelector('#app');

if (!app) {
    throw new Error('NOVASTAR: Application root #app was not found.');
}

app.innerHTML = renderAppLayout();

initializePageController();