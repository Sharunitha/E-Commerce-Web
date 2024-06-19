const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");

    if (bar) {
      bar.addEventListener("click", () => {
        nav.classList.add("active");
      });
    }
    if (close) {
      close.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", loadProduct);

function loadProduct() {
  loadContent();
}

function loadContent() {
  //remove items from cart
  let btnRemove = document.querySelectorAll(".cart-remove");
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });
  let qtyElement = document.querySelectorAll(".product-quantity");
  qtyElement.forEach((input) => {
    input.addEventListener("change", changeQty);
  });
}

//remove item
function removeItem() {
  if (confirm("Are You Sure to Remove")) {
    this.closest("tr").remove();
  }
}
//change quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
}
