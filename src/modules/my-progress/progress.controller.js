/* =========================================
   NOVASTAR 3.0 CLEAN
   MY PROGRESS CONTROLLER
========================================= */

import {
    getProgress,
    addLearningGoal,
    removeLearningGoal,
    toggleLearningGoal,
    completeActivity
} from './progress.service.js';

export function initializeProgressController() {

    const goalInput = document.querySelector('#progress-goal-input');
    const addButton = document.querySelector('#progress-goal-add');
    const goalsList = document.querySelector('#progress-goals-list');
const activityInput = document.querySelector('#progress-activity-input');
const activityAddButton = document.querySelector('#progress-activity-add');
const activitiesList = document.querySelector('#progress-activities-list');
    
    if (!goalInput || !addButton || !goalsList) {
        return;
    }

    const goalsCard = document.querySelector(
        '[data-progress-section="learning-goals"]'
    );

    function updateGoalCounter() {
        const progress = getProgress();

        const valueElement = goalsCard?.querySelector(
            '.progress-section-value'
        );

        if (valueElement) {
            valueElement.textContent = progress.learningGoals.length;
        }

        const detailElement = valueElement?.nextElementSibling;

        if (detailElement) {
            detailElement.textContent =
                progress.learningGoals.length === 1
                    ? 'Learning goal registered'
                    : 'Learning goals registered';
        }
    }

    function renderGoals() {
        const progress = getProgress();

        goalsList.innerHTML = '';

        progress.learningGoals.forEach(goal => {
            const item = document.createElement('li');
            const title = document.createElement('span');
            const removeButton = document.createElement('button');
            const completeButton = document.createElement('button');

completeButton.type = 'button';
completeButton.textContent = goal.completed
    ? 'Mark as pending'
    : 'Complete';

completeButton.setAttribute(
    'aria-pressed',
    String(goal.completed)
);

completeButton.addEventListener('click', () => {
    toggleLearningGoal(goal.id);
    renderGoals();
});

            title.textContent = goal.title;
            removeButton.type = 'button';
            removeButton.textContent = 'Remove';
            removeButton.setAttribute('aria-label', `Remove ${goal.title}`);

            removeButton.addEventListener('click', () => {
                removeLearningGoal(goal.id);
                renderGoals();
                updateGoalCounter();
            });

            if (goal.completed) {
    title.style.textDecoration = 'line-through';
    title.style.opacity = '0.65';
}

const actions = document.createElement('div');

actions.className = 'progress-goal-actions';

actions.append(completeButton, removeButton);

item.append(title, actions);
            goalsList.appendChild(item);
        });

        updateGoalCounter();
    }

    function handleAddGoal() {
        const title = goalInput.value.trim();

        if (!title) {
            goalInput.focus();
            return;
        }

        const updatedProgress = addLearningGoal(title);

        if (!updatedProgress) {
            return;
        }

        goalInput.value = '';
        renderGoals();
        goalInput.focus();
    }

    addButton.addEventListener('click', handleAddGoal);

    goalInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddGoal();
        }
    });


    function updateActivityCounter() {
        const progress = getProgress();

        const activitiesCard = document.querySelector(
            '[data-progress-section="completed-activities"]'
        );

        const valueElement = activitiesCard?.querySelector(
            '.progress-section-value'
        );

        if (valueElement) {
            valueElement.textContent = progress.completedActivities;
        }

        const detailElement = valueElement?.nextElementSibling;

        if (detailElement) {
            detailElement.textContent =
                progress.completedActivities === 1
                    ? 'Activity completed'
                    : 'Activities completed';
        }
    }

    function renderActivities() {
        const progress = getProgress();

        if (!activitiesList) return;

        activitiesList.innerHTML = '';

        (progress.completedActivityList || []).forEach(activity => {
    const item = document.createElement('li');
    const title = document.createElement('span');
    const date = document.createElement('small');

    title.textContent = activity.title;

    date.textContent = activity.completedAt
        ? new Date(activity.completedAt).toLocaleDateString()
        : 'Date unavailable';

    date.className = 'progress-activity-date';

    item.append(title, date);
    activitiesList.appendChild(item);
});

        updateActivityCounter();
    }

    function handleAddActivity() {
        const title = activityInput.value.trim();

        if (!title) {
            activityInput.focus();
            return;
        }

        const updatedProgress = completeActivity(title);

        if (!updatedProgress) return;

        activityInput.value = '';
        renderActivities();
        activityInput.focus();
    }

    if (activityInput && activityAddButton && activitiesList) {
        activityAddButton.addEventListener('click', handleAddActivity);

        activityInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleAddActivity();
            }
        });

        renderActivities();
    }


    renderGoals();
}
