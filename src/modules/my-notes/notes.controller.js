
/* =========================================
   NOVASTAR 3.0 CLEAN
   MY NOTES — CONTROLLER
========================================= */

import {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    toggleNoteFavorite
} from './notes.service.js';


function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    })[character]);
}


export function initializeNotesController() {

    const form = document.querySelector('#note-form');
    const noteList = document.querySelector('#notes-list');
    const searchInput = document.querySelector('#notes-search');
    const filterSelect = document.querySelector('#notes-filter');
    const notesCount = document.querySelector('#notes-count');
    const message = document.querySelector('#note-form-message');

    if (!form || !noteList) {
        return;
    }

    function renderNotes() {

        const notes = getAllNotes();

        const search = searchInput.value
            .trim()
            .toLowerCase();

        const filter = filterSelect.value;

        const filteredNotes = notes.filter(note => {

            const matchesSearch =
                note.title.toLowerCase().includes(search) ||
                note.content.toLowerCase().includes(search);

            const matchesFilter =
                filter === 'all' ||
                (filter === 'favorites' && note.favorite) ||
                note.category === filter;

            return matchesSearch && matchesFilter;

        });

        notesCount.textContent = `${notes.length} NOTES`;

        if (filteredNotes.length === 0) {

            noteList.innerHTML = `
                <div class="card notes-empty-state">
                    <div class="card-body">
                        <h3>No notes found</h3>
                        <p>
                            Create a new note or change your search
                            and filters.
                        </p>
                    </div>
                </div>
            `;

            return;
        }

        noteList.innerHTML = filteredNotes.map(note => `
            <article class="card note-item">

                <div class="card-body">

                    <div class="note-item-header">

                        <div>
                            <span class="badge badge-primary">
                                ${escapeHTML(note.category)}
                            </span>

                            <h3>${escapeHTML(note.title)}</h3>
                        </div>

                        <button
                            type="button"
                            class="button button-ghost"
                            data-note-action="favorite"
                            data-note-id="${escapeHTML(note.id)}"
                            aria-label="Toggle favorite"
                        >
                            ${note.favorite ? '★' : '☆'}
                        </button>

                    </div>

                    <p class="note-item-content">
                        ${escapeHTML(note.content).replace(/\n/g, '<br>')}
                    </p>

                    <div class="note-item-footer">

                        <small>
                            Updated:
                            ${new Date(note.updatedAt).toLocaleDateString()}
                        </small>

                        <div class="note-item-actions">

                            <button
                                type="button"
                                class="button button-secondary"
                                data-note-action="edit"
                                data-note-id="${escapeHTML(note.id)}"
                            >
                                Edit
                            </button>

                            <button
                                type="button"
                                class="button button-danger"
                                data-note-action="delete"
                                data-note-id="${escapeHTML(note.id)}"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            </article>
        `).join('');

    }


    form.addEventListener('submit', event => {

        event.preventDefault();

        const formData = new FormData(form);

        const title = formData.get('title').trim();
        const content = formData.get('content').trim();
        const category = formData.get('category');

        if (!title || !content) {
            message.textContent =
                'Please complete the title and content.';
            return;
        }

        createNote({
            title,
            content,
            category
        });

        form.reset();

        message.textContent = 'Your note was saved successfully.';

        renderNotes();

    });


    searchInput.addEventListener('input', renderNotes);

    filterSelect.addEventListener('change', renderNotes);


    noteList.addEventListener('click', event => {

        const button = event.target.closest('[data-note-action]');

        if (!button) {
            return;
        }

        const action = button.dataset.noteAction;
        const noteId = button.dataset.noteId;

        const note = getAllNotes().find(item => item.id === noteId);

        if (!note) {
            return;
        }

        if (action === 'favorite') {

            toggleNoteFavorite(noteId);

        }

        if (action === 'delete') {

            const confirmed = window.confirm(
                `Delete "${note.title}"?`
            );

            if (!confirmed) {
                return;
            }

            deleteNote(noteId);

        }

        if (action === 'edit') {

            const newTitle = window.prompt(
                'Edit note title:',
                note.title
            );

            if (newTitle === null) {
                return;
            }

            const newContent = window.prompt(
                'Edit note content:',
                note.content
            );

            if (newContent === null) {
                return;
            }

            if (!newTitle.trim() || !newContent.trim()) {
                window.alert('Title and content cannot be empty.');
                return;
            }

            updateNote(noteId, {
                title: newTitle.trim(),
                content: newContent.trim()
            });

        }

        renderNotes();

    });


    renderNotes();

}
