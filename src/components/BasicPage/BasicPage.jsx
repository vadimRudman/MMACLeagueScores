import React from 'react';
import { Link } from 'react-router-dom';
import NavigationColumn from '../NavigationColumn/NavigationColumn';
import ButtonsList from '../ButtonsList/ButtonsList';
import './styles/BasicPage.scss';

const BasicPage = ({
    title,
    backLocation,
    leftSideData,
    leftNextLocation,
    rightSideData,
    rightNextLocation,
    buttons
}) => {
    return (
        <div className='page'>
            {backLocation && <Link to={backLocation}>Back</Link>}
            <h2 className='basicPage__title'>{title}</h2>
            <div className='basicPage__columnsContainer'>
                {leftSideData &&
                    <div className='leftSide'>
                        <NavigationColumn nextLocation={leftNextLocation} items={leftSideData} />
                    </div>
                }
                {rightSideData &&
                    <div className='rightSide'>
                        <NavigationColumn nextLocation={rightNextLocation} items={rightSideData} />
                    </div>
                }
            </div>
            <ButtonsList items={buttons || []} />
        </div>
    )
};

export default BasicPage;
