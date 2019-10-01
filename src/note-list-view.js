(function(exports) {
  function NoteListView(noteList) {
    notesHTML = "<ul>"
    noteList.notes().forEach(function(note) {
      notesHTML += ("<li>" + note.text() + "</li>")
    })
    return notesHTML += "</ul>"
  }

  exports.NoteListView = NoteListView;
})(this)
