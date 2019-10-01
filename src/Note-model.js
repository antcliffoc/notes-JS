(function(exports){
  function Note(text) {
    this.content = text
  };
  Note.prototype.text = function() {
    return this.content
  };
 exports.Note = Note;
})(this);
