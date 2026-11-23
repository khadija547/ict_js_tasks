function issueBook() {
  let student = document.getElementById("studentName").value;
  let title = document.getElementById("bookTitle").value;
  let id = document.getElementById("bookId").value;
  let days = Number(document.getElementById("days").value);

  let message;

  if (days > 14) {
    message = "Please return the book on time";
  } else {
    message = "Book issued successfully";
  }

  document.getElementById("output").innerHTML =
    "Student Name: " + student + "<br>" +
    "Book Title: " + title + "<br>" +
    "Book ID: " + id + "<br>" +
    "Days: " + days + "<br>" +
    message;
}