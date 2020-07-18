import {useState} from 'react';

const BreadcrumbUse = () => {

    const [expanded, setExpanded] = useState(false);
    const open = () => setExpanded(true);

    return {expanded, open}
}
export default BreadcrumbUse;