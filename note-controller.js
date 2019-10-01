(function(exports) {
  function NoteController(notelist){
    this.nl = notelist;
  }
  NoteController.prototype.addNote = function(text) {
    this.nl.newNote(text);
  }
  NoteController.prototype.createView = function() {
    var elem = document.getElementById("app");
    console.log(elem)
    elem.innerHTML = NoteListView(this.nl)
  }
  exports.NoteController = NoteController;
})(this)
