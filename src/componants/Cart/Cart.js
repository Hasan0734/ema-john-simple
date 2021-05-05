import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }
    let Shipping = 0;
    if(total > 35){
        Shipping = 0;
    }
    else if(total > 15){
        Shipping = 4.99;
    }
    else if(total > 0){
        Shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + Shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
        <h4>This is cart</h4>
        <p>Items Ordered : {cart.length}</p>
        <p>Product Price: {formatNumber(total)}</p>
        <p><small>Shipping cost: {Shipping}</small></p>
        <p><small>Tax + VAT: {tax}</small></p>
        <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;