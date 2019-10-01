(function(exports){
  function testNoteController() {
    noteController = new NoteController("dummy")
    assert.isTypeOf(noteController, NoteController)
  }
  testNoteController();

  // function testInnerHTML() {
  //   noteController = new NoteController(new NoteList())
  //   noteController.addNote("booze")
  //   noteController.createView()
  //   assert.equals(document.getElementById("app"), "<ul><li>booze</li></ul>")
  // }
  // testInnerHTML();
})(this)
