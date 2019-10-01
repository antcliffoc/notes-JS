(function(exports) {
  function setGreeter(text){
    console.log("hi");
    var elem = document.getElementById("app");
    elem.innerHTML = text;
  }
  setGreeter("howdy");
  exports.setGreeter = setGreeter
})(this)
