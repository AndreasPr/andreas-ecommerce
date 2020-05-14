import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }
    //It is exactly the same with the above (simplified way).React knows that if we have a class component 
    //and we write the state property like so, we just have an invoked state - (invocation of the super() in constructor)
    state = {
        loading: true
    }

     unsubscribeFromSnapshot = null;

     componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        
        // fetch('https://firestore.googleapis.com/v1/projects/react-ecommerce-db-5e9a1/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        // --------- Promise Pattern ---------------
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        // --------- Observer Pattern ---------------
        // collectionRef.onSnapshot(async snapShot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });
     }


    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> } />
            
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
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);