import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import LandingPage from '../Landing';
import SeasonPage from '../Season';
import GamePage from '../Game';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SEASON} component={SeasonPage} />
            <Route path={ROUTES.GAME} component={GamePage} />
        </div>
    </Router>
);

export default App;
