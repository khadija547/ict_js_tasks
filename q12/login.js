function login() {
  let name = document.getElementById("studentName").value;
  let roll = document.getElementById("rollNumber").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", roll);

  window.location.href = "dashboard.html";
}