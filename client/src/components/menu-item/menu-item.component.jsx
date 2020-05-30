import React from 'react';
import {withRouter} from 'react-router-dom';
//import './menu-item.styles.scss';
import {MenuItemContainer, MenuItemBackgroundImage, MenuItemContent, MenuItemTitle, MenuItemSubtitle} 
from './menu-item.styles';
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>(
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <MenuItemBackgroundImage className='background-image' imageUrl={imageUrl}/>
        <MenuItemContent className='content'>
            <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </MenuItemContent> 
    </MenuItemContainer>
);

export default withRouter(MenuItem);

