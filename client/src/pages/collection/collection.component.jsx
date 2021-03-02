import React, {useState, useEffect} from 'react';
import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';

const CollectionPage = ({match, collection}) => {
    // Destructuring Assignment, which on the left-hand side of the assignment we define what 
    // values to unpack from the sourced object - collection 
    const {title, items, itemNameRoute} = collection;

    const [isDisplayedProducts, setIsDisplayedProducts] = useState(items);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0);

    const handleChange = (event) => {
        let searchQuery = event.target.value.toLowerCase();
        let displayedProducts = items.filter(function(el){
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        setIsDisplayedProducts(displayedProducts);
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        const data = isDisplayedProducts;
        const slice = data.slice(offset, offset + perPage);
        setData(slice);
        setPageCount(Math.ceil(data.length / perPage));
    }, [offset, isDisplayedProducts])

    return(    
        <div className="container-fluid collectionPageContainer">
            
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 inputSearchContainer">
                    <input name="inputSearch" className="form-control inputSearch" onChange={handleChange} placeholder="Search your product..."/>
                </div>
            </div>            

            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center collectionPageTitle">
                    <h3 className="heading-collectionPageTitle">{title.toUpperCase()}</h3>
                </div>
            </div>
            
            <div className="row">
                {
                    data.length >= 1 
                    ? 
                    data
                    .map((displayProduct) => 
                        (
                            <div key={displayProduct.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 collectionPageProducts">
                                <CollectionItem key={displayProduct.id} item={displayProduct} title={title} itemNameRoute={itemNameRoute}/>
                            </div>
                        )
                    )
                    :
                    <div className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    No products!   
                    </div>
                    // items
                    // .map((item) => 
                    //     (
                    //         <div key={item.id} className="col-12 d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 collectionPageProducts">
                    //             <CollectionItem key={item.id} item={item} title={title} itemNameRoute={itemNameRoute}/>
                    //         </div>
                    //     )
                    // )
                    
                }
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paginationContainerDiv">
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);