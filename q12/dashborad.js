let name = localStorage.getItem("studentName");
let roll = localStorage.getItem("rollNumber");

document.getElementById("welcome").innerHTML =
  "Welcome, " + name + "! (Roll Number: " + roll + ")";