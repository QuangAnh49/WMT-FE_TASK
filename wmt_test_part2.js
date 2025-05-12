const items = document.querySelectorAll(".carousel-item");

// Select the modal and its content
const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal-content");
const modalImage = modalContent.querySelector("#modal-image");
const modalTitle = modalContent.querySelector("#modal-title");
const modalDescription = modalContent.querySelector("#modal-description");
const closeButton = modalContent.querySelector(".close-button");


function calculateTotalValue(products) {
  return products.reduce((total, product) => {
    let discount = product.quantity > 5 ? 0.1 : 0; // 10% discount for quantity > 5
    let productValue = product.price * product.quantity * (1 - discount);
    return total + productValue;
  }, 0);
}

// Example usage:
const products = [
  { name: "Product A", price: 50, quantity: 3 },
  { name: "Product B", price: 30, quantity: 6 },
  { name: "Product C", price: 20, quantity: 2 },
];

console.log(calculateTotalValue(products)); // Logs the total value

items.forEach((item) => {
  item.addEventListener("click", function () {
    modalContent.classList.add("show");
    modal.style.display = "flex";
    modalImage.src = item.querySelector("img").src;
    modalTitle.textContent = item.querySelector("h2").textContent;
    modalDescription.textContent = item.querySelector("p").textContent;
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modalContent.classList.add("hidden");
  }
};

closeButton.onclick = function () {
  modalContent.classList.add("hidden");
};

modalContent.addEventListener("animationend", function () {
  if (modalContent.classList.contains("hidden")) {
    modalContent.classList.remove("show");
    modalContent.classList.remove("hidden");
    modal.style.display = "none";
  }
});
