function registerStudent() {
  let name = document.getElementById("studentName").value;
  let roll = document.getElementById("rollNumber").value;
  let dept = document.getElementById("department").value;
  let sem = document.getElementById("semester").value;

  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>" +
    "Roll Number: " + roll + "<br>" +
    "Department: " + dept + "<br>" +
    "Semester: " + sem;
}