/* =========================================
   NOVASTAR 3.0
   APPLICATION CORE
========================================= */

import { APP_CONFIG } from '../config/app.config.js';

import {
    NAVIGATION_CONFIG
} from './navigation/navigation.config.js';

export const NOVASTAR = Object.freeze({

    config: APP_CONFIG,

    navigation: NAVIGATION_CONFIG,

    initialize() {

        console.info(
            `${this.config.name} ${this.config.version} initialized.`
        );

    }

});
