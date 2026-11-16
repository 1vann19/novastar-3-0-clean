
const ACADEMIES = Object.freeze([
    {
        id: 'science',
        name: 'Science Academy',
        description: 'Explore scientific concepts, experiments and discoveries.',
        symbol: '⚛',
        category: 'Science'
    },
    {
        id: 'technology',
        name: 'Technology Academy',
        description: 'Discover programming, digital tools and innovation.',
        symbol: '⌘',
        category: 'Technology'
    },
    {
        id: 'mathematics',
        name: 'Mathematics Academy',
        description: 'Develop mathematical reasoning and problem-solving skills.',
        symbol: '∑',
        category: 'Mathematics'
    },
    {
        id: 'humanities',
        name: 'Humanities Academy',
        description: 'Explore history, language, culture and society.',
        symbol: '⌂',
        category: 'Humanities'
    }
]);

export function getAllAcademies() {
    return [...ACADEMIES];
}

export function getAcademyById(id) {
    return ACADEMIES.find(academy => academy.id === id) || null;
}

export function searchAcademies(query = '') {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return getAllAcademies();
    }

    return ACADEMIES.filter(academy =>
        academy.name.toLowerCase().includes(normalizedQuery) ||
        academy.description.toLowerCase().includes(normalizedQuery) ||
        academy.category.toLowerCase().includes(normalizedQuery)
    );
}
