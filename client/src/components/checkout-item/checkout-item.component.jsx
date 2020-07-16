import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
// import {CheckoutItemContainer, CheckoutItemImageStylesContainer, CheckoutItemImageStyles, 
//     CheckoutItemNameStyles, CheckoutItemQuantityStyles, 
//     CheckoutItemArrowStyles, CheckoutItemValueStyles, CheckoutItemPriceStyles, 
//     CheckoutItemRemoveButtonStyles} from './checkout-item.styles';
import './checkout-item.styles.css';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
    // <CheckoutItemContainer>
    //     <CheckoutItemImageStylesContainer>
    //         <CheckoutItemImageStyles src={imageUrl} alt='item'/>
    //     </CheckoutItemImageStylesContainer>
    //         <CheckoutItemNameStyles>{name}</CheckoutItemNameStyles>
    //         <CheckoutItemQuantityStyles>
    //             <CheckoutItemArrowStyles onClick = {() => removeItem(cartItem)}>&#10094;</CheckoutItemArrowStyles>
    //                 <CheckoutItemValueStyles>{quantity}</CheckoutItemValueStyles>
    //             <CheckoutItemArrowStyles onClick={() => addItem(cartItem)}>&#10095;</CheckoutItemArrowStyles>
    //         </CheckoutItemQuantityStyles>
    //         <CheckoutItemPriceStyles>{price}</CheckoutItemPriceStyles>
    //     <CheckoutItemRemoveButtonStyles onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemoveButtonStyles>
    // </CheckoutItemContainer>
    <div className="containerItem">

        <div className="row eachProduct">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 imageContainer">
                <img src={imageUrl} alt='item' className="img-thumbnail"/>
            </div>
            <span className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 nameContainer">
                {name}
            </span>
            <span className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 quantityContainer">
                <div className="arrow" onClick = {() => removeItem(cartItem)}>&#10094;</div>
                    <span className="quantityNumber">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 priceContainer">
                ${price}
            </div>
            <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 removeSymbolContainer" onClick={() => clearItem(cartItem)}>
                <span className="removeSymbol">&#10005;</span>
            </div>
        </div>
        
        <div className="container">
            <div className="row mobileContainer">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right">
                    <h4 className="mobileProductsHeader">Product</h4>
                    <p>Description:</p>
                    <p>Quantity:</p>
                    <p>Price:</p>
                    <p>Remove:</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-left">
                    <h4 className="mobileInfoHeader">Details</h4>
                    <p>{name}</p>
                    <p>
                        <span className="arrow" onClick = {() => removeItem(cartItem)}>&#10094;</span>
                            <span className="mobileQuantity">{quantity}</span>
                        <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
                    </p>
                    <p className="mobilePrice">${price}</p>
                    <p className="mobileRemove" onClick={() => clearItem(cartItem)}>&#10005;</p>
                </div>
            </div>
        </div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);