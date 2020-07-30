import React from 'react';
import './collection-item.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';



import {addItem} from '../../redux/cart/cart.actions';
//import {selectCollectionItem} from '../../redux/shop/shop.selectors';

// import {CollectionItemContainer, ImageStyles, AddButtonStyles, 
//     CollectionFooterContainer, NameStyles, PriceStyles} from './collection-item.styles';


// const CollectionItem = ({item, addItem}) => {
//     const {name, price, imageUrl} = item;
    
//     return (
//         <div className="containerStyle">
//             <img src={imageUrl} alt="collectionItem" className="image" />
//                 <div className="nameOfProduct">{name}</div>
//                 <div className="priceOfProduct">${price}</div>
//             <CustomButton className="customButton" inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
//         </div>
//     );
// };

// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);


const CollectionItem = ({item, title, addItem, history, match, routeName, itemNameRoute, collectionItem}) => {
    //onClick={() => history.push(`${name}`)}
    const {id, name, price, imageUrl} = item;
    console.log(match.url)
    return (
        <div className="containerStyle">
            
            <img src={imageUrl} alt="collectionItem" className="image" />
            {
                match.url === "/shop" 
                ? <Link to={{ pathname: `${match.url}/${title.toLowerCase()}/${name}`, state: {id: id, name: name, price: price, imageUrl: imageUrl, title: title}  }} ><div className="nameOfProduct" >{name}</div></Link> 
                : <Link to={{ pathname: `${match.url}/${name}`, state: {id: id, name: name, price: price, imageUrl: imageUrl, title: title}  }} ><div className="nameOfProduct" >{name}</div></Link>
            }               
                <div className="priceOfProduct">${price}</div>
            <CustomButton className="customButton" inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
            
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));