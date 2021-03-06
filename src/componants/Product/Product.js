import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { img, name, seller, price, stock, key} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock -Order soon</p>
                { props.showAddToCart === true && <button  
                className="main-button"
                 onClick ={() => props.handleAddProduct(props.product)} >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
<<<<<<< HEAD
                  
=======
                    
>>>>>>> 025a72542864ae5453bd130c092e5f6bedb9a991
            </div>

        </div>
    );
};

export default Product;
