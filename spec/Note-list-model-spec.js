(function(exports) {
  var noteList = new NoteList();
  function InstanceOfNoteList() {
    assert.isTypeOf(noteList, NoteList)
  }
  InstanceOfNoteList();

  function NotesReturnsArray() {
    assert.isTypeOf(noteList.notes(), Array)
  }
  NotesReturnsArray();

  function NoteListArrayIncludes() {
    var note = new Note("test text");
    noteList.addNote(note);
    assert.arrIncludes(noteList.notes(), note)
  }
  NoteListArrayIncludes();

  function newNoteAddsNote() {
    noteList.newNote('testing')
    assert.equals(noteList.notes().length, 2)
  }
  newNoteAddsNote();
})(this);
