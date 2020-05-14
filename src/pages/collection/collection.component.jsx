import React from 'react';
//import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {CollectionPageContainer, CollectionPageTitle, CollectionPageItems} from './collection.styles';

const CollectionPage = ({collection}) => {
    //Destructuring Assignment, which on the left-hand side of the assignment we define what 
    // values to unpack from the sourced object - collection 
    const {title, items} = collection;
    
    return(
    <CollectionPageContainer>
        <CollectionPageTitle>{title}</CollectionPageTitle>
        <CollectionPageItems>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </CollectionPageItems>
    </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);