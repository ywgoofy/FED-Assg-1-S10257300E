// script.js

const cart = [];

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    console.log(`Added ${itemName} to cart. Cart:`, cart);
}

function showCart() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.itemName} - ${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}

// Calculate and display total price
function calculateTotalPrice() {
    const totalElement = document.getElementById('totalPrice');
    const total = cart.reduce((acc, item) => acc + parseInt(item.price), 0);
    totalElement.textContent = `Total: ¥${total}`;
}

function checkout() {
    window.location.href = 'checkout.html';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
