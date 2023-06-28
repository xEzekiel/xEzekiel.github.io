var quantityElement = document.getElementById("quantity");
var quantity = 1;

function increment() {
  quantity++;
  quantityElement.textContent = quantity;
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}

var subcategoryElement = document.getElementById("subcategory");

function populateSubcategories() {
  // Clear existing options
  subcategoryElement.innerHTML =
    '<option value="">Select a subcategory</option>';

  // Get selected category value
  var category = document.getElementById("category").value;

  // Populate subcategories based on the selected category
  switch (category) {
    case "1":
      subcategoryElement.innerHTML += '<option value="1">Laptops</option>';
      subcategoryElement.innerHTML += '<option value="2">Smartphones</option>';
      break;
    case "2":
      subcategoryElement.innerHTML += '<option value="3">Shirts</option>';
      subcategoryElement.innerHTML += '<option value="4">Pants</option>';
      break;
    default:
      break;
  }
}
