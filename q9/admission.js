function checkEligibility() {
  let name = document.getElementById("studentName").value;
  let total = Number(document.getElementById("totalMarks").value);
  let obtained = Number(document.getElementById("obtainedMarks").value);

  let percentage = (obtained / total) * 100;
  let result;

  if (percentage >= 50) {
    result = "Eligible for Admission";
  } else {
    result = "Not Eligible for Admission";
  }

  document.getElementById("output").innerHTML =
    "Student Name: " + name + "<br>" +
    "Percentage: " + percentage + "%<br>" +
    result;
}