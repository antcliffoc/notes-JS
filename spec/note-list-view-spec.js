(function(exports){
  function NoNotesView(){
    noteList = new NoteList()
    assert.equals(NoteListView(noteList), "<ul></ul>")
  }

  function OneNoteView(){
    noteList = new NoteList()
    noteList.newNote("test")
    assert.equals(NoteListView(noteList), "<ul><li>test</li></ul>")
  }

  function MultipleNoteView(){
    noteList = new NoteList()
    noteList.newNote("test")
    noteList.newNote("also")
    assert.equals(NoteListView(noteList), "<ul><li>test</li><li>also</li></ul>")
  }
  NoNotesView()
  OneNoteView()
  MultipleNoteView()
})(this)
