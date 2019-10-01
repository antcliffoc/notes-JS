(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.notes = function() {
    return this.list;
  };

  NoteList.prototype.addNote = function(note) {
    this.list.push(note)
  };

  NoteList.prototype.newNote = function(text) {
    let newNote = new Note(text);
    this.list.push(newNote)
  };

  exports.NoteList = NoteList;
})(this)
