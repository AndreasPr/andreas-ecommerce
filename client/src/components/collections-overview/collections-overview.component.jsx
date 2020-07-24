import React from 'react';
//import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionsOverview = ({collections}) => {
    return (
        <CollectionsOverviewContainer>
            {
                collections.map( ({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);