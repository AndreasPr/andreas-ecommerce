import React, {useEffect, lazy, Suspense} from 'react';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import {Route} from 'react-router-dom';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
const CollectionItemPage = lazy(() => import('../collection-item/collection-item.component'));


const ShopPage = ({fetchCollectionsStart, match}) => {

     useEffect(() => {
        // Good pattern to fire off our API requests inside of componentDidMount
        fetchCollectionsStart();
     }, [fetchCollectionsStart]);

     return(
            <div className='shop-page'>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                    <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                    <Route exact path={`${match.path}/:collectionId/:id`} component={CollectionItemPage} />
                </Suspense>
            
            {/* When you use the component props, the router uses React.createElement to create a new React element
            from the given component. That means if you provide an inline function to the component attribute, you 
            would create a new component every render. This results in the existing 
            component unmounting and the new component mounting instead of just updating the existing component.
            
            So, if you need to pass a prop (In our case "loading") to a component being rendered by React Router,
            instead of using Routes component prop, use its render prop passing it an inline function then 
            pass along the arguments to the element you’re creating. */}
            </div>
        );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);