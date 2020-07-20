import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.css';
// import {MenuItemContainer, MenuItemBackgroundImage, MenuItemContent, MenuItemTitle, MenuItemSubtitle} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>{

    const backgroundDiv = {
        backgroundImage: `url(${imageUrl})`
    };

    return (
        // <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        //     <MenuItemBackgroundImage className='background-image' imageUrl={imageUrl}/>
        //     <MenuItemContent className='content'>
        //         <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        //         <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        //     </MenuItemContent> 
        // </MenuItemContainer>

        <div className="menuItemContainer" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={backgroundDiv}></div>
                <div className='content'>
                    <h1 className="menuItemTitle">{title.toUpperCase()}</h1>
                    <span className="menuItemSubtitle">SHOP NOW</span>
                </div>
        
        </div>
    );
};

export default withRouter(MenuItem);

