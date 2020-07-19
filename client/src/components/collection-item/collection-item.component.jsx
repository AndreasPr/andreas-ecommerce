import React from 'react';
import './collection-item.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions';
// import {CollectionItemContainer, ImageStyles, AddButtonStyles, 
//     CollectionFooterContainer, NameStyles, PriceStyles} from './collection-item.styles';


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="containerStyle">
                <img src={imageUrl} alt="collectionItem" className="image" />
                    <div className="nameOfProduct">{name}</div>
                    <div className="priceOfProduct">${price}</div>
                <CustomButton className="customButton" inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
                
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);