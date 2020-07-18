import React from 'react';
import './breadcrumbs.styles.css';
import BreadcrumbCollapser from './breadcrumbCollapser.component';
import BreadcrumbUse from './breadcrumbUse';

const BreadcrumbSeparator = ({children, ...props}) => (
    <li className="breadcrumb-separator" {...props}>
        {children}
    </li>
); 

const BreadcrumbItem = ({children, ...props}) => (
    <li className='breadcrumb-item' {...props}>
        {children}
    </li>
);

const AppBreadcrumbs = ({ separator, collapse={}, ...props}) => {
    let children = React.Children.toArray(props.children);

    const {expanded, open} = BreadcrumbUse();
    const {itemsBefore = 1, itemsAfter = 1, max = 4} = collapse;
    const totalItems = children.length;
    const lastIndex = totalItems - 1;

    children = children.map( (child, index) => (
        <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    ));

    children = children.reduce( (accumulate, child, index) => { 
        const notLast = index < lastIndex
        if(notLast){
            accumulate.push(child,
                <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
                    {separator}
                </BreadcrumbSeparator>
            )
        }
        else{
            accumulate.push(child)
        }
        return accumulate;
      }, [])

      if(!expanded || totalItems <= max){
        children = [
            ...children.slice(0,  itemsBefore),
            <BreadcrumbCollapser title="Expand" key="collapsed-separator" onClick={open} />,
            ...children.slice(totalItems - itemsAfter, totalItems)
        ]
      }

    return <ol>{children}</ol> 
};
export default AppBreadcrumbs;