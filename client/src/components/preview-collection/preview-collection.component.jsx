import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.css';

// Tip:  => () is an implicit return equivalent to => { return () }
const PreviewCollection = ({title, items, history, match, routeName, itemNameRoute}) => {
    return(
        <div className="container-fluid collectionContainer">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center headingCollection">
                    <h3 className="heading-collection" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h3>
                </div>
            </div>
            <div className="row">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <div key={item.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 previewCollectionInfo">
                            <CollectionItem key={item.id} item={item} title={title} itemNameRoute={itemNameRoute}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default withRouter(PreviewCollection);