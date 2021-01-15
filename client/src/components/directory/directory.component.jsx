import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';

const Directory = ({sections}) =>(
      <div className="container-fluid directoryContainer">
        <div className="row">
          {sections.map(({id, ...otherSectionProps}) => (
            <div key={id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> 
              <MenuItem key={id} {...otherSectionProps}/>
            </div>
          ))}
        </div>
      </div>
); 

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);