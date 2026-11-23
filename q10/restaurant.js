function placeOrder() {
  let customer = document.getElementById("customerName").value;
  let food = document.getElementById("foodItem").value;
  let price = Number(document.getElementById("price").value);
  let qty = Number(document.getElementById("quantity").value);

  let total = price * qty;
  let message;

  if (total > 2000) {
    message = "You are eligible for a discount";
  } else {
    message = "No discount available";
  }

  document.getElementById("output").innerHTML =
    "<b>Order Summary</b><br>" +
    "Customer: " + customer + "<br>" +
    "Food Item: " + food + "<br>" +
    "Price: Rs. " + price + "<br>" +
    "Quantity: " + qty + "<br>" +
    "Total: Rs. " + total + "<br>" +
    message;
}