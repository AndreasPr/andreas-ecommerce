import React from 'react';
import './collection-item.styles.css';
import {connect} from 'react-redux';
//import {selectCollection} from '../../redux/shop/shop.selectors';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItemPage = ({location, addItem}) => {
    const item = location.state;
    const {name, price, imageUrl, title} = location.state;
    
    return (
        <div className="container-fluid containerProductPage">
            <div className="row">
                <div className="col-12 col-sm-6 ml-sm-auto col-md-5 ml-md-auto col-lg-4 ml-lg-auto col-xl-6 photoContainer">
                    <figure className="figure">
                        <img src={imageUrl} className="figure-img img-fluid rounded" alt="productImage"/>
                    </figure>
                </div>
                <div className="col-12 col-sm-6 ml-sm-auto col-md-5 mr-md-auto col-lg-5 mr-lg-auto col-xl-6 detailsContainer">
                    <h1>{name}</h1>
                    <h4 className="priceOfProductPage">${price}</h4>
                    <p>Praesent fringilla est id egestas a pretium consectetur quisque consectetur pulvinar at vestibulum vitae id praesent eget magnis vestibulum.
                        Facilisis adipiscing nulla blandit sem nec est vestibulum malesuada in.</p>
                    <div className="colorSelection">
                        <div className="colorHeading">
                            <span className="colorTitle">Color: </span>
                        </div>
                        <div className="colorCircles">
                            <span className="dot1"></span>
                        </div>
                        <div className="colorCircles">
                            <span className="dot2"></span>
                        </div>
                        <div className="colorCircles">
                            <span className="dot3"></span>
                        </div>
                        <div className="colorCircles">
                            <span className="dot4"></span>
                        </div>
                    </div>
                    <div></div>
                    <div className="sizeSelection">
                        <div className="sizeHeading">
                            <span className="sizeTitle">Size: </span>
                        </div>
                        <div className="sizeOptions">
                            <span className="size">S</span>
                            <span className="size">M</span>
                            <span className="size">L</span>
                            <span className="size">XL</span>
                        </div>
                    </div>
                    <div></div>
                    <div className="addToCartBtnContainer">
                        <button className="addToCartBtn" onClick={() => addItem(item)}>ADD TO CART</button>
                    </div>
                    <div className="categoryContainer">
                        <span className="categoryTitle">Category:</span><span> {title}</span>
                    </div>
                    <div className="skuContainer">
                        <span className="skuTitle">SKU: </span><span className="skuContent">N/A</span>
                    </div>
                    <div className="shareContainer">
                        <span className="shareTitle">Share: </span>
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a> 
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://pinterest.com/"><i className="fab fa-pinterest"></i></a>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     collectionItem: selectCollection(ownProps.match.params.collectionId)(state)
// });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItemPage);