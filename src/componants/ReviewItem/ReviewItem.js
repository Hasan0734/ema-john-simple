import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity} = props.product
    return (
        <div className="reviewItem">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;