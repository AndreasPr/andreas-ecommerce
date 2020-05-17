import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component{

     componentDidMount(){
        // Good pattern to fire off our API requests inside of componentDidMount
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
     }


    render(){
        const {match} = this.props;

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
            
            {/* When you use the component props, the router uses React.createElement to create a new React element
            from the given component. That means if you provide an inline function to the component attribute, you 
            would create a new component every render. This results in the existing 
            component unmounting and the new component mounting instead of just updating the existing component.
            
            So, if you need to pass a prop (In our case "loading") to a component being rendered by React Router,
            instead of using Routes component prop, use its render prop passing it an inline function then 
            pass along the arguments to the element you’re creating. */}
            
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);