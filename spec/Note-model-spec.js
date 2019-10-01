(function(exports) {
  function testNoteStoresText() {
    var note = new Note("test Text");

    assert.equals(note.text, "test Text")
  }
  testNoteStoresText();
})(this);
