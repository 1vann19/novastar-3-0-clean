
/* =========================================
   NOVASTAR 3.0 CLEAN
   MY NOTES — INTERFACE
========================================= */

export function renderMyNotesPage() {

    return `
        <section class="notes-workspace">

            <div class="notes-toolbar">

                <div>
                    <h2>My Study Notes</h2>
                    <p>
                        Create, organize and manage your
                        personal learning notes.
                    </p>
                </div>

                <span class="badge badge-primary">
                    PERSONAL WORKSPACE
                </span>

            </div>

            <section class="card notes-editor">

                <div class="card-body">

                    <h2>Create a Note</h2>

                    <form id="note-form">

                        <div class="form-group">
                            <label for="note-title">
                                Note title
                            </label>

                            <input
                                id="note-title"
                                name="title"
                                type="text"
                                placeholder="Enter your note title"
                                maxlength="100"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="note-category">
                                Category
                            </label>

                            <select
                                id="note-category"
                                name="category"
                            >
                                <option value="General">General</option>
                                <option value="Science">Science</option>
                                <option value="Technology">Technology</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Humanities">Humanities</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="note-content">
                                Note content
                            </label>

                            <textarea
                                id="note-content"
                                name="content"
                                rows="5"
                                placeholder="Write your study notes here..."
                                maxlength="10000"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="button button-primary"
                        >
                            Save Note
                        </button>

                        <p
                            id="note-form-message"
                            role="status"
                            aria-live="polite"
                        ></p>

                    </form>

                </div>

            </section>

            <section class="notes-library">

                <div class="notes-library-header">

                    <div>
                        <h2>My Notes</h2>
                        <p>All your saved study notes.</p>
                    </div>

                    <span
                        id="notes-count"
                        class="badge badge-neutral"
                    >
                        0 NOTES
                    </span>

                </div>

                <div class="notes-filters">

                    <input
                        id="notes-search"
                        type="search"
                        placeholder="Search your notes..."
                        aria-label="Search notes"
                    >

                    <select
                        id="notes-filter"
                        aria-label="Filter notes"
                    >
                        <option value="all">All Notes</option>
                        <option value="favorites">Favorites</option>
                        <option value="General">General</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Humanities">Humanities</option>
                    </select>

                </div>

                <div
                    id="notes-list"
                    class="notes-list"
                    aria-live="polite"
                ></div>

            </section>

        </section>
    `;

}
