/* =========================================
   NOVASTAR 3.0 CLEAN
   MY PROGRESS SERVICE
========================================= */

const STORAGE_KEY = 'novastar-my-progress';

const DEFAULT_PROGRESS = {
    completedActivities: 0,
    totalActivities: 0,
    learningGoals: [],
    achievements: [],
    lastUpdated: null
};

function getStoredProgress() {
    try {
        const storedProgress = localStorage.getItem(STORAGE_KEY);

        if (!storedProgress) {
            return { ...DEFAULT_PROGRESS };
        }

        return {
            ...DEFAULT_PROGRESS,
            ...JSON.parse(storedProgress)
        };

    } catch (error) {
        console.error('NOVASTAR: Could not load progress.', error);
        return { ...DEFAULT_PROGRESS };
    }
}

function saveProgress(progress) {
    try {
        const updatedProgress = {
            ...progress,
            lastUpdated: new Date().toISOString()
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedProgress)
        );

        return updatedProgress;

    } catch (error) {
        console.error('NOVASTAR: Could not save progress.', error);
        return null;
    }
}

export function getProgress() {
    return getStoredProgress();
}

export function updateProgress(updates = {}) {
    const currentProgress = getStoredProgress();

    const updatedProgress = {
        ...currentProgress,
        ...updates
    };

    return saveProgress(updatedProgress);
}

export function addLearningGoal(title) {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
        return null;
    }

    const progress = getStoredProgress();

    const newGoal = {
        id: crypto.randomUUID(),
        title: normalizedTitle,
        completed: false,
        createdAt: new Date().toISOString()
    };

    progress.learningGoals.push(newGoal);

    return saveProgress(progress);
}

export function removeLearningGoal(goalId) {
    const progress = getStoredProgress();

    progress.learningGoals = progress.learningGoals.filter(
        goal => goal.id !== goalId
    );

    return saveProgress(progress);
}

export function toggleLearningGoal(goalId) {
    const progress = getStoredProgress();

    progress.learningGoals = progress.learningGoals.map(goal =>
        goal.id === goalId
            ? { ...goal, completed: !goal.completed }
            : goal
    );

    return saveProgress(progress);
}

export function completeActivity(title) {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) return null;

    const progress = getStoredProgress();

    const activity = {
        id: crypto.randomUUID(),
        title: normalizedTitle,
        completedAt: new Date().toISOString()
    };

    if (!Array.isArray(progress.completedActivityList)) {
        progress.completedActivityList = [];
    }

    progress.completedActivityList.push(activity);
    progress.completedActivities = progress.completedActivityList.length;
    progress.totalActivities = Math.max(
        progress.totalActivities,
        progress.completedActivities
    );

    return saveProgress(progress);
}

export function resetProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return { ...DEFAULT_PROGRESS };

    } catch (error) {
        console.error('NOVASTAR: Could not reset progress.', error);
        return null;
    }
}
