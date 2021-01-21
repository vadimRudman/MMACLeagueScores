import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import LandingPage from '../Landing';
import SeasonPage from '../Season';
import GamePage from '../Game';
import TeamPage from '../Team'
import './styles/GlobalStyles.scss'

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <main className='layout__main-content'>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SEASON} component={SeasonPage} />
            <Route path={ROUTES.TEAM} component={TeamPage} />
            <Route path={ROUTES.GAME} component={GamePage} />
        </main>
    </Router>
);

export default App;
