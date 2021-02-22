import React, {useState} from 'react';
import './collection.styles.css';
//import { useLocation } from 'react-router-dom'
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';

const CollectionPage = ({match, collection}) => {
    // Destructuring Assignment, which on the left-hand side of the assignment we define what 
    // values to unpack from the sourced object - collection 
    const {title, items, itemNameRoute} = collection;

    const [isDisplayedProducts, setIsDisplayedProducts] = useState(items);

    const handleChange = (event) => {
        let searchQuery = event.target.value.toLowerCase();
        let displayedProducts = items.filter(function(el){
            let searchValue = el.name.toLowerCase();
            
            return searchValue.indexOf(searchQuery) !== -1;
        });
        setIsDisplayedProducts(displayedProducts);
    };

    return(    
        <div className="container-fluid collectionPageContainer">
            
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 inputSearchContainer">
                    <input name="inputSearch" className="form-control inputSearch" onChange={handleChange} placeholder="Search your product..."/>
                </div>
            </div>            

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center collectionPageTitle">
                    <h3 className="heading-collectionPageTitle">{title.toUpperCase()}</h3>
                </div>
            </div>
            
            <div className="row">
                {
                    isDisplayedProducts 
                    ? 
                    isDisplayedProducts
                    .map((displayProduct) => 
                        (
                            <div key={displayProduct.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 collectionPageProducts">
                                <CollectionItem key={displayProduct.id} item={displayProduct} title={title} itemNameRoute={itemNameRoute}/>
                            </div>
                        )
                    )
                    :
                    items
                    .map((item) => 
                        (
                            <div key={item.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 collectionPageProducts">
                                <CollectionItem key={item.id} item={item} title={title} itemNameRoute={itemNameRoute}/>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);