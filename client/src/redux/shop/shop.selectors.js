import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);


//------------------------------------------------------------

export const selectCollectionItem = collectionItemUrlParam => createSelector(
    [selectCollections], 
    collection => (collection ? collection.title : null)
    
//Object.keys(collection)

    // {
    //     if (typeof Object.keys(collection[collectionUrlParam]) !== 'undefined' && Object.keys(collection[collectionUrlParam]).length > 0) {
            
    //     }
    // }

);


// export const selectCollectionItem = createSelector(
//     [selectCollection],
//     getCurrentCollectionItem,
//     (collection, collectionItem) => collection.filter() 
// );
//------------------------------------------------------------

export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []);

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);