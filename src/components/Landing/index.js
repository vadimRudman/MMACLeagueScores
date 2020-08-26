import React, { useState } from 'react';
import { seasonsData } from '../../mocks/seasonsMock';
import BasicPage from '../BasicPage/BasicPage';

const LandingPage = () => {
    const seasonsFetcher = () => seasonsData;
    const [seasons, setSeasons] = useState(seasonsFetcher);

    return (
        <div>
            <BasicPage title='Choose Season' leftNextLocation='season' leftSideData={seasons} />
            <div className='buttons-wrapper'>
                <button>Add Season</button>
            </div>
        </div>
    )
};

export default LandingPage;