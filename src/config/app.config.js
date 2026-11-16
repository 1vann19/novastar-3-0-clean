/* =========================================
   NOVASTAR 3.0
   APPLICATION CONFIGURATION
========================================= */

export const APP_CONFIG = Object.freeze({

    name: 'NOVASTAR',

    version: '3.0.0',

    description: 'A learning and collaboration platform.',

    assistant: {
        name: 'Roxie',
        role: 'NOVASTAR AI Assistant'
    },

    localization: {
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'es']
    },

    environment: import.meta.env.MODE

});
