'use strict'

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    //busca el producte a l'array 
    const productToBuy = products.find(product => product.id == id)

    //errors
    if (!productToBuy) {
        alert(`Error`);
        return;
    }
    
    //si existeix el producte a la cart, li suma 1 a quantitat, 
    // i si no existeix, el puja i li crea la propietat "quantity" per anar sumant
    const exist = cart.find(product => product.id === id); 
    if (exist) {
        exist.quantity += 1;
    } else {
        productToBuy.quantity = 1;
        cart.push(productToBuy);
    }
  
    console.log(cart)
    
}

// Exercise 2
function cleanCart() {

    cart.length = 0;
    console.log(cart)

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array


    applyPromotionsCart();
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        
        //adaptació als productes amb descompte de l'exercici 4
        if (cart[i].subtotalWithDiscount){
            totalPrice += cart[i].subtotalWithDiscount
        } else {
            totalPrice += cart[i].quantity * cart[i].price
        }
    }

    console.log(totalPrice)

}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    //per modificar el descompte s'ha de modificar l'array de productes, no aquesta funció

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].offer && cart[i].quantity >= cart[i].offer.number){
            let discount = 1 - (cart[i].offer.percent / 100)
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price * discount
        }
        
    }


}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}