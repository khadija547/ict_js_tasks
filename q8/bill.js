function calculateBill() {
  let name = document.getElementById("productName").value;
  let price = Number(document.getElementById("productPrice").value);
  let qty = Number(document.getElementById("quantity").value);

  let total = price * qty;

  document.getElementById("output").innerHTML =
    "Product: " + name + "<br>" +
    "Price: " + price + "<br>" +
    "Quantity: " + qty + "<br>" +
    "Total Bill: " + total;
}