(function(exports) {
  function setList(notelist){
    var elem = document.getElementById("app");
    elem.innerHTML = NoteListView(notelist)
  }
  exports.setList = setList;
})(this)
