import React from 'react';
import './collection-item.styles.css';
import {connect} from 'react-redux';
import {selectCollectionItem} from '../../redux/shop/shop.selectors';
import {addItem} from '../../redux/cart/cart.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const CollectionItemPage = ({collectionItem, match, location, addItem }) => {

    const {imageUrl, name, price} = collectionItem;
    // const item = location.state;
    // const {name, price, imageUrl, title} = location.state;
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
                        <button className="addToCartBtn" onClick={() => addItem(collectionItem)}>ADD TO CART</button>
                    </div>
                    <div className="skuContainer">
                        <span className="skuTitle">SKU: </span><span className="skuContent">N/A</span>
                    </div>
                    <div className="shareContainer">
                        <span className="shareTitle">Share: </span>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a> 
                        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://pinterest.com/"><FontAwesomeIcon icon={faPinterest} /></a>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state, ownProps) => ({
    collectionItem: selectCollectionItem(ownProps.match.params.collectionId, ownProps.match.params.id)(state)
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItemPage);