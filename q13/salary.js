function calculateSalary() {
  let name = document.getElementById("empName").value;
  let basic = Number(document.getElementById("basicSalary").value);
  let allowance = Number(document.getElementById("allowance").value);

  let gross = basic + allowance;
  let category;

  if (gross > 50000) {
    category = "High Salary Category";
  } else {
    category = "Normal Salary Category";
  }

  document.getElementById("output").innerHTML =
    "Employee Name: " + name + "<br>" +
    "Basic Salary: " + basic + "<br>" +
    "Allowance: " + allowance + "<br>" +
    "Gross Salary: " + gross + "<br>" +
    category;
}