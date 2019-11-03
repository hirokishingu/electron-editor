window.addEventListener('DOMContentLoaded', () => {
  var editor - CodeMirror.fromTextArea(
    document.getElementById('textarea'),
    {
      mode: "texxt/x-kotlin",
      linenumbers: true,
      indentUnit: 2
    }
  )
})