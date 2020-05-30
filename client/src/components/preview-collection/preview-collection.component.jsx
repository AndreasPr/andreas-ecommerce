import React from 'react';
//import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import {CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewMain} from './preview-collection.styles';

// Tip:  => () is an implicit return equivalent to => { return () }
const PreviewCollection = ({title, items}) => (
    <CollectionPreviewContainer>
         <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
         <CollectionPreviewMain>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
         </CollectionPreviewMain>
    </CollectionPreviewContainer>
);

export default PreviewCollection;