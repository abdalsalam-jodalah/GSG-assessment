const products = [
    { name: "Laptop", category: "electronics", price: 1299 },
    { name: "shirt", category: "cloth", price: 37 },
    { name: "phone", category: "electronics", price: 799 },
    { name: "Jeans", category: "cloth", price: 65 },
];

function displayProducts(productArray) {
    const productList = document.getElementById("plist");
    productList.innerHTML = ''; // Clear previous content
    productArray.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("pitem");
        productItem.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;
        productList.appendChild(productItem);
    });
}

function filterProducts(category) {
    if (category === "All") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

displayProducts(products);