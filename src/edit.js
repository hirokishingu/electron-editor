window.addEventListener('DOMContentLoaded', () => {
  var editor = CodeMirror.fromTextArea(
    document.getElementById('textarea'),
    {
      mode: "text/x-kotlin",
      linenumbers: true,
      indentUnit: 2
    }
  )
})