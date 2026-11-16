
/* =========================================
   NOVASTAR 3.0 CLEAN
   MY NOTES — NOTES SERVICE
========================================= */

const STORAGE_KEY = 'novastar_notes';

function getStoredNotes() {
    try {
        const notes = localStorage.getItem(STORAGE_KEY);

        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.error('NOVASTAR: Could not load notes.', error);
        return [];
    }
}

function saveStoredNotes(notes) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(notes)
    );
}

export function getAllNotes() {
    return getStoredNotes();
}

export function createNote({
    title,
    content,
    category = 'General'
}) {
    const notes = getStoredNotes();

    const newNote = {
        id: crypto.randomUUID(),
        title: title.trim(),
        content: content.trim(),
        category,
        favorite: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    notes.unshift(newNote);
    saveStoredNotes(notes);

    return newNote;
}

export function updateNote(id, updates) {
    const notes = getStoredNotes();

    const updatedNotes = notes.map(note =>
        note.id === id
            ? {
                ...note,
                ...updates,
                updatedAt: new Date().toISOString()
            }
            : note
    );

    saveStoredNotes(updatedNotes);

    return updatedNotes.find(note => note.id === id) || null;
}

export function deleteNote(id) {
    const notes = getStoredNotes();

    const updatedNotes = notes.filter(
        note => note.id !== id
    );

    saveStoredNotes(updatedNotes);

    return updatedNotes;
}

export function toggleNoteFavorite(id) {
    const notes = getStoredNotes();

    const updatedNotes = notes.map(note =>
        note.id === id
            ? { ...note, favorite: !note.favorite }
            : note
    );

    saveStoredNotes(updatedNotes);

    return updatedNotes.find(note => note.id === id) || null;
}
