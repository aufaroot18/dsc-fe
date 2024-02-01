const products = [
  {
    id: "1",
    name: "Samsung Galaxy S24",
    price: "Rp.21.000.000",
    location: "Jakarta Barat",
    rating: "5.0",
    sold: "200 Terjual",
    estimation: "Tiba 20 - 22 Januari",
    image:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/15/f85bdd04-8f3c-4868-a3e6-17cd13845116.jpg.webp?ect=4g",
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
    price: "Rp.21.000.000",
    location: "Jakarta Barat",
    rating: "5.0",
    sold: "200 Terjual",
    estimation: "Tiba 20 - 22 Januari",
    image:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/15/f85bdd04-8f3c-4868-a3e6-17cd13845116.jpg.webp?ect=4g",
  },
  {
    id: "3",
    name: "Samsung Galaxy S24",
    price: "Rp.21.000.000",
    location: "Jakarta Barat",
    rating: "5.0",
    sold: "200 Terjual",
    estimation: "Tiba 20 - 22 Januari",
    image:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/15/f85bdd04-8f3c-4868-a3e6-17cd13845116.jpg.webp?ect=4g",
  },
  {
    id: "4",
    name: "Samsung Galaxy S24",
    price: "Rp.21.000.000",
    location: "Jakarta Barat",
    rating: "5.0",
    sold: "200 Terjual",
    estimation: "Tiba 20 - 22 Januari",
    image:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/15/f85bdd04-8f3c-4868-a3e6-17cd13845116.jpg.webp?ect=4g",
  },
];

function renderProductCard(product) {
  // Buat Product Card
  const productElement = document.createElement("div");
  productElement.setAttribute("class", "product");

  // Buat Product Image
  const productImageElement = document.createElement("img");
  productImageElement.setAttribute("class", "product-image");
  productImageElement.setAttribute("src", product.image);
  productElement.appendChild(productImageElement);

  // Buat Product Name
  const productNameElement = document.createElement("p");
  productNameElement.setAttribute("class", "product-name");
  productNameElement.textContent = product.name;
  productElement.appendChild(productNameElement);

  // Buat Product Price
  const productPriceElement = document.createElement("p");
  productPriceElement.setAttribute("class", "product-price");
  productPriceElement.textContent = product.price;
  productElement.appendChild(productPriceElement);

  // Buat Product Rating
  const productRatingElement = document.createElement("p");
  productRatingElement.setAttribute("class", "product-rating");
  productRatingElement.textContent = product.rating + product.sold;
  productElement.appendChild(productRatingElement);

  // Buat Product Estimation
  const productEstimationElement = document.createElement("p");
  productEstimationElement.setAttribute("class", "product-estimation");
  productEstimationElement.textContent = product.estimation;
  productElement.appendChild(productEstimationElement);

  return productElement;
}

function renderAllProductCard() {
  const productContainer = document.querySelector(".product-container");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = renderProductCard(product);
    productContainer.appendChild(productElement);
  }
}

function changeDisplay() {
  const displayElement = document.querySelector(".display");

  displayElement.addEventListener("click", function () {
    const productContainer = document.querySelector(".product-container");

    productContainer.classList.toggle("flex-column");
  });
}

function main() {
  renderAllProductCard();
  changeDisplay();
}

main();
