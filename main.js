// Get the featured products section element
const featuredProductsSection = document.querySelector('#featured-products');

// Mock JSON data for featured products
const featuredProductsData = {
  "featuredProducts": [
    {
      "id": 1,
      "name": "Product 1",
      "description": "This is the description for product 1.",
      "price": 19.99,
      "image": "product1.jpg"
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "This is the description for product 2.",
      "price": 29.99,
      "image": "product2.jpg"
    },
    {
      "id": 3,
      "name": "Product 3",
      "description": "This is the description for product 3.",
      "price": 39.99,
      "image": "product3.jpg"
    }
  ]
};

// Loop through the featured products data and generate HTML
function generateProductsHTML(products) {
  // Remove all current product items from the featured products section
  featuredProductsSection.innerHTML = '';

  products.forEach(product => {
    // Create a product item element
    const productItem = document.createElement('li');
    productItem.classList.add('product-item');

    // Create an image element
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productItem.appendChild(productImage);

    // Create a heading element
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productItem.appendChild(productName);

    // Create a description element
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productItem.appendChild(productDescription);

    // Create a price element
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productItem.appendChild(productPrice);

    // Create a button element
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    productItem.appendChild(addButton);

    // Append the product item to the featured products section
    featuredProductsSection.appendChild(productItem);
  });
}

// Initialize the featured products section with all products
generateProductsHTML(featuredProductsData.featuredProducts);

// Add event listener to search input
const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', () => {
  // Get the user's search input
  const searchValue = searchInput.value.trim().toLowerCase();

  // Filter the featured products by name or description based on the search value
  const filteredProducts = featuredProductsData.featuredProducts.filter(product => {
    return product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue);
  });

  // Generate HTML for the filtered products and update the featured products section
  generateProductsHTML(filteredProducts);
});
