/* =========================================
   NOVASTAR 3.0
   MAIN NAVIGATION CONFIGURATION
========================================= */

export const NAVIGATION_CONFIG = [

    {
        id: 'main',
        label: 'Main',
        items: [
            {
                id: 'home',
                label: 'Home',
                href: '/',
                icon: 'house',
                roles: ['student', 'teacher', 'administrator']
            }
        ]
    },

    {
        id: 'learning',
        label: 'Learning',
        items: [
            {
                id: 'academies',
                label: 'Academies',
                href: '/academies',
                icon: 'graduation-cap',
                roles: ['student', 'teacher', 'administrator']
            },
            {
                id: 'my-progress',
                label: 'My Progress',
                href: '/my-progress',
                icon: 'chart-no-axes-combined',
                roles: ['student']
            }
        ]
    },

    {
        id: 'workspace',
        label: 'Workspace',
        items: [
            {
                id: 'activity-hub',
                label: 'Activity Hub',
                href: '/activity-hub',
                icon: 'calendar-days',
                roles: ['student', 'teacher']
            },
            {
                id: 'my-notes',
                label: 'My Notes',
                href: '/my-notes',
                icon: 'notebook-pen',
                roles: ['student', 'teacher']
            },
            {
                id: 'resources',
                label: 'Resources',
                href: '/resources',
                icon: 'library',
                roles: ['student', 'teacher', 'administrator']
            }
        ]
    },

    {
        id: 'collaboration',
        label: 'Collaboration',
        items: [
            {
                id: 'group-projects',
                label: 'Group Projects',
                href: '/group-projects',
                icon: 'users',
                roles: ['student', 'teacher']
            }
        ]
    },

    {
        id: 'ai-tools',
        label: 'AI & Tools',
        items: [
            {
                id: 'roxie',
                label: 'Roxie',
                href: '/roxie',
                icon: 'sparkles',
                roles: ['student', 'teacher']
            }
        ]
    },

    {
        id: 'challenges',
        label: 'Challenges',
        items: [
            {
                id: 'missions',
                label: 'Missions',
                href: '/missions',
                icon: 'trophy',
                roles: ['student']
            }
        ]
    }

];
