import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// We are passing the CollectionsOverview to WithSpinner and later the WithSpinner(CollectionsOverview) 
// to connect in order to pass the isLoading.
// Compose allows us to evaluate multiple curried functions where the function returns another function
// that expects something to be passed to it and allows us to chain them all together like this.  
const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);
export default CollectionsOverviewContainer;

