let greeting = prompt("Hello, World!",[100]);
alert("You entered: " + greeting);
var user = "Guest";
function greetUser2(){
    console.log("Welcome, " + user + "!");
}
greetUser2();
var usercount = 0
function incrementUserCount() {
    usercount++;
    console.log("User count is now: " + usercount);
}

// --- Cart logic ---
var cartCount = 0;

function loadCart() {
    var saved = parseInt(localStorage.getItem('cartCount'));
    if (!isNaN(saved) && saved >= 0) cartCount = saved;
}

function saveCart() {
    localStorage.setItem('cartCount', cartCount);
}

function updateCartUI() {
    var el = document.getElementById('cart-count');
    if (el) el.textContent = String(cartCount);
}

function addToCart(quantity) {
    quantity = quantity || 1;
    cartCount += quantity;
    saveCart();
    updateCartUI();
}
function subFromCart(quantity) {
    quantity = quantity || 1;
    cartCount = Math.max(0, cartCount - quantity);
    saveCart();
    updateCartUI();
}

function setupAddButtons() {
    document.querySelectorAll('.add-to-cart').forEach(function(btn){
        btn.addEventListener('click', function(){
            addToCart(1);
        });
    });
}
function setupSubButtons() {
    document.querySelectorAll('.sub-from-cart').forEach(function(btn){
        btn.addEventListener('click', function(){
            subFromCart(1);
        });
    });
}

document.addEventListener('DOMContentLoaded', function(){
    loadCart();
    updateCartUI();
    setupAddButtons();
    setupSubButtons();
    var cartBtn = document.getElementById('cart-btn');
    if (cartBtn) cartBtn.addEventListener('click', function(){
        alert('Items in cart: ' + cartCount);
    });
});

