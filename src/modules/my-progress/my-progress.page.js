/* =========================================
   NOVASTAR 3.0 CLEAN
   MY PROGRESS MODULE
========================================= */
import { getProgress } from './progress.service.js';

export function renderMyProgressPage() {
        const progress = getProgress();

    const progressSections = [
        {
    id: 'learning-progress',
    title: 'Learning Progress',
    description: 'Track your progress across all academies.',
    symbol: '↗',
    value: progress.totalActivities > 0
        ? `${Math.round((progress.completedActivities / progress.totalActivities) * 100)}%`
        : '0%',
    detail: `${progress.completedActivities} of ${progress.totalActivities} activities completed`
},
        {
    id: 'learning-goals',
    title: 'Learning Goals',
    description: 'Organize your academic goals and objectives.',
    symbol: '◎',
    value: progress.learningGoals.length,
    detail: progress.learningGoals.length === 1
        ? 'Learning goal registered'
        : 'Learning goals registered'
},
        {
    id: 'completed-activities',
    title: 'Completed Activities',
    description: 'Review your completed tasks and activities.',
    symbol: '✓',
    value: progress.completedActivities,
    detail: progress.completedActivities === 1
        ? 'Activity completed'
        : 'Activities completed'
},
        {
    id: 'achievements',
    title: 'Achievements',
    description: 'Discover the milestones you reach.',
    symbol: '✦',
    value: progress.achievements.length,
    detail: progress.achievements.length === 1
        ? 'Achievement unlocked'
        : 'Achievements unlocked'
}
    ];

    return `
        <section class="progress-grid">

            ${progressSections.map(section => `
                <article
                    class="card progress-section-card"
                    data-progress-section="${section.id}"
                >

                    <div class="card-body">

                        <span
                            class="progress-section-symbol"
                            aria-hidden="true"
                        >
                            ${section.symbol}
                        </span>

                        <h2>${section.title}</h2>

                        <p>${section.description}</p>
                        ${section.value !== undefined ? `
    <strong class="progress-section-value">
        ${section.value}
    </strong>
    <p>${section.detail}</p>
` : ''}
${section.id === 'learning-goals' ? `
    <div class="progress-goals-form">

        <label for="progress-goal-input">
            Add a learning goal
        </label>

        <div class="progress-goals-controls">
            <input
                type="text"
                id="progress-goal-input"
                placeholder="Write your learning goal..."
                maxlength="120"
            >

            <button
                type="button"
                id="progress-goal-add"
                class="btn btn-primary"
            >
                Add Goal
            </button>
        </div>

        <ul
            id="progress-goals-list"
            class="progress-goals-list"
        ></ul>

    </div>
` : ''}


${section.id === 'completed-activities' ? `
    <div class="progress-activities-form">

        <label for="progress-activity-input">
            Register a completed activity
        </label>

        <div class="progress-activities-controls">
            <input
                type="text"
                id="progress-activity-input"
                placeholder="Write the activity name..."
                maxlength="120"
            >

            <button
                type="button"
                id="progress-activity-add"
                class="btn btn-primary"
            >
                Register Activity
            </button>
        </div>

        <ul
            id="progress-activities-list"
            class="progress-activities-list"
        ></ul>

    </div>
` : ''}


                        <span class="badge badge-primary">
                            COMING SOON
                        </span>

                    </div>

                </article>
            `).join('')}

        </section>
    `;

}