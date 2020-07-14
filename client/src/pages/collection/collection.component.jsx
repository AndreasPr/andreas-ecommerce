import React from 'react';
import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
//import {CollectionPageContainer, CollectionPageTitle, CollectionPageItems} from './collection.styles';

const CollectionPage = ({collection}) => {
    // Destructuring Assignment, which on the left-hand side of the assignment we define what 
    // values to unpack from the sourced object - collection 
    const {title, items} = collection;
    
    return(
    // <CollectionPageContainer>
    //     <CollectionPageTitle>{title}</CollectionPageTitle>
    //     <CollectionPageItems>
    //         {
    //             items.map(item => <CollectionItem key={item.id} item={item}/>)
    //         }
    //     </CollectionPageItems>
    // </CollectionPageContainer>
    <div className="container-fluid collectionPageContainer">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center collectionPageTitle">
                <h3 className="heading-collectionPageTitle">{title.toUpperCase()}</h3>
            </div>
        </div>
        <div className="row">
            {
                items
                .map(item => (
                    <div key={item.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 collectionPageProducts">
                        <CollectionItem key={item.id} item={item}/>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);