import React from 'react';
import { Link } from 'react-router-dom';

const NavigationColumn = ({
    nextLocation,
    items
}) => {
    const buildRowLinkTo = id => {
        return `/${nextLocation}/${id}`;
    };
    const renderButton = item => {
        const { name, id } = item;
        const rowLinkTo = buildRowLinkTo(id);
        return (
            <div className='nav-row' key={`${name}${id}`}>
                <Link to={rowLinkTo}>
                    {name}
                </Link>
            </div>
        )
    };
    const rows = items.map(renderButton);
    return (
        <div className='navColumn'>
            {rows}
        </div>
    );
};

export default NavigationColumn;
