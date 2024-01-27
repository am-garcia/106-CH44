function saveTask() {
  console.log("saving task");
}

function init() {
  console.log("luke i am your father");

  //hook events
  $("#btnSave").click(saveTask);
}

window.onload = init;
