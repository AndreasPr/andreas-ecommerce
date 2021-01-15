import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.css';
import {useTranslation} from 'react-i18next';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>{
    const [t] = useTranslation('common');
    const backgroundDiv = {
        backgroundImage: `url(${imageUrl})`
    };

    return (
        <div className="menuItemContainer" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={backgroundDiv}></div>
                <div className='content'>
                    <h1 className="menuItemTitle">{title.toUpperCase()}</h1>
                    <span className="menuItemSubtitle">{t('homepage.shopNow')}</span>
                </div>
        </div>
    );
};

export default withRouter(MenuItem);

