
/* =========================================
   NOVASTAR 3.0 CLEAN
   APPLICATION ROUTER
========================================= */

import { ROUTES_CONFIG } from './routes.config.js';

/* FIND ROUTE */

export function getCurrentRoute(pathname = window.location.pathname) {

    return ROUTES_CONFIG.find(
        route => route.path === pathname
    ) || null;

}

/* NAVIGATE */

export function navigateTo(path) {

    const route = getCurrentRoute(path);

    if (!route) {
        return false;
    }

    window.history.pushState({}, '', route.path);

    window.dispatchEvent(new PopStateEvent('popstate'));

    return true;

}

/* INITIALIZE ROUTER */

export function initializeRouter(onRouteChange) {

    function handleRouteChange() {

        const route = getCurrentRoute();

        onRouteChange(route);

    }

    function handleNavigation(event) {

        const link = event.target.closest('a[data-route]');

        if (!link) {
            return;
        }

        const path = link.getAttribute('href');

        if (!path || !getCurrentRoute(path)) {
            return;
        }

        event.preventDefault();

        navigateTo(path);

    }

    document.addEventListener('click', handleNavigation);

    window.addEventListener('popstate', handleRouteChange);

    handleRouteChange();

    return function cleanupRouter() {

        document.removeEventListener('click', handleNavigation);

        window.removeEventListener('popstate', handleRouteChange);

    };

}
