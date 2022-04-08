function productCount(product) {
  let inputBtn = document.getElementById("input").value;
  let newInputBtn = parseInt(inputBtn);
  let total = newInputBtn;
  if (product == true) {
    total = newInputBtn + 1;
  }
  if (product == false && newInputBtn > 1) {
    total = newInputBtn - 1;
  }
  document.getElementById("input").value = total;
  document.getElementById("quantity").innerText = total;
}

const buyBtn = document.getElementById("buy");
buyBtn.addEventListener("click", function () {
  let inputBtn = document.getElementById("input").value;
  let newInputBtn = parseInt(inputBtn);
  const total = newInputBtn * 3000;
  document.getElementById("total-price").innerText = total;
});
