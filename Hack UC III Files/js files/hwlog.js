function createHomeworkLog(){
  var hwLog = document.getElementById("homeworkLog");

  if( !hwLog ) {
    alert("does not work");
  }

  hwLog.innerHTML = "test";
  /* var header = innerHTML("Current Assignments:" + assignmentCount); */
  var row = hwLog.insertRow(0);
  var cell = hwLog.insertCell(0);
  cell.innerHTML = "test";
}

/* createHomeworkLog(); */
