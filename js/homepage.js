let products = []; 
const apiUrl = 'https://fakestoreapi.com/products'; 


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    products = data; 
    displayProducts(products); 
  })
  .catch(error => console.error('Error fetching product data:', error));

function displayProducts(productsToDisplay) {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  productsToDisplay.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product-image">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
      <button class="buy-button">Buy Now</button>
      <button class="add-button" onClick="addToCart(${product.id})">Add to Cart </button>
    `;

    productListContainer.appendChild(productElement);
  });
}

// Function to apply search and filter
function applySearchAndFilter() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const categoryFilter = document.getElementById('category-filter').value;

  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter ? product.category.toLowerCase() === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  
  displayProducts(filteredProducts);
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  
  const existingProductIndex = cart.findIndex(item => item.id === productId);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1; 
  } else {
   
    cart.push({ ...product, quantity: 1 });
  }

 
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length; 
}
