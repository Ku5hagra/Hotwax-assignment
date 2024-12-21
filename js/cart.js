// Function to display the cart items
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p id="cartstatus">Your cart is empty!</p>';
      totalPriceContainer.textContent = '0.00';
      return;
    }
  
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;
  
    cart.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('cart-item');
  
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="cart-item-image">
        <div class="cart-item-info">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <p>Quantity: ${product.quantity}</p>
        </div>
        <div class="cart-item-actions">
          <button onclick="removeFromCart(${product.id})">Remove</button>
        </div>
      `;
  
      cartItemsContainer.appendChild(productElement);
  
      
      totalPrice += product.price * product.quantity;
    });
  
    
    totalPriceContainer.textContent = totalPrice.toFixed(2);
  }
  
  // Function to remove product from the cart
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Filter out the product with the given ID
    cart = cart.filter(item => item.id !== productId);
  
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Re-display the cart items
    displayCartItems();
  }
  
  // Initial cart items display
  displayCartItems();
  