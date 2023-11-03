Here's an example of a complex JavaScript code named "ecommerce.js" that simulates an online shopping experience with multiple functionalities:

```javascript
// ecommerce.js

// Data structures
const products = [
  { id: 1, name: 'Product A', price: 9.99, quantity: 10 },
  { id: 2, name: 'Product B', price: 14.99, quantity: 5 },
  { id: 3, name: 'Product C', price: 24.99, quantity: 2 },
  { id: 4, name: 'Product D', price: 19.99, quantity: 7 },
  { id: 5, name: 'Product E', price: 34.99, quantity: 3 },
];

const cart = [];

// Functions
function showProductList() {
  console.log('Available Products:');
  products.forEach((product) => {
    console.log(`${product.id}) ${product.name} - Price: $${product.price}`);
  });
}

function addToCart(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    if (product.quantity >= quantity) {
      const cartItem = cart.find((item) => item.product.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        cart.push({ product, quantity });
      }
      product.quantity -= quantity;
      console.log(`Added ${quantity} "${product.name}" to the cart.`);
    } else {
      console.log(`Insufficient quantity for "${product.name}".`);
    }
  } else {
    console.log('Invalid product ID.');
  }
}

function removeFromCart(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  const cartItem = cart.find((item) => item.product.id === productId);
  if (product && cartItem) {
    if (cartItem.quantity >= quantity) {
      cartItem.quantity -= quantity;
      product.quantity += quantity;
      console.log(`Removed ${quantity} "${product.name}" from the cart.`);
      if (cartItem.quantity === 0) {
        cart.splice(cart.indexOf(cartItem), 1);
        console.log(`No more "${product.name}" in the cart.`);
      }
    } else {
      console.log(`Insufficient quantity for "${product.name}" in the cart.`);
    }
  } else {
    console.log('Invalid product ID or item not found in the cart.');
  }
}

function showCart() {
  console.log('Cart:');
  cart.forEach((item) => {
    const { product, quantity } = item;
    console.log(`${product.name} - Price: $${product.price} - Quantity: ${quantity}`);
  });
}

function checkout() {
  let totalAmount = 0;
  console.log('Order Summary:');
  cart.forEach((item) => {
    const { product, quantity } = item;
    const itemAmount = product.price * quantity;
    totalAmount += itemAmount;
    console.log(`${product.name} - Quantity: ${quantity} - Amount: $${itemAmount}`);
  });
  console.log(`Total Amount: $${totalAmount}`);
  cart.length = 0; // Empty the cart
  console.log('Thank you for your purchase!');
}

// Usage
showProductList();

addToCart(1, 2);
addToCart(2, 1);
addToCart(5, 4);
addToCart(3, 2);

removeFromCart(1, 1);
removeFromCart(2, 10);
removeFromCart(6, 1); // Invalid product ID
removeFromCart(3, 3);

showCart();
checkout();
```

This code simulates an e-commerce website, allowing users to add products to their cart, remove items, view the cart contents, and complete the checkout by displaying an order summary. The code makes use of data structures, functions, loops, conditionals, and array manipulation to achieve the desired functionalities.