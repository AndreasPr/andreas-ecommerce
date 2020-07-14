import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
//import './directory.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';
import {DirectoryContainer} from './directory.styles';
//import './directory.styles.css';

const Directory = ({sections}) =>(
      <DirectoryContainer>
          {sections.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}/>
          ))}
      </DirectoryContainer>
      // <div className="directoryContainer">
      //   {sections.map(({id, ...otherSectionProps}) => (
      //     <div key={id} className="column"> 
      //       <MenuItem key={id} {...otherSectionProps}/>
      //     </div>
      //   ))}
      // </div>


); 

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});
export default connect(mapStateToProps)(Directory);