import React from 'react';
import { useRef } from 'react';

import GameCard from '../GameCard/GameCard';

import { teamsData } from '../../mocks/teamsMock';
import { gamesData } from '../../mocks/gamesMock';

const GamePage = () => {
    const getGame = gameId => gamesData[0];
    const getHomeTeam = homeTeamId => teamsData[0];
    const getAwayTeam = awayTeamId => teamsData[1];

    const game = useRef(getGame);
    const homeTeam = useRef(getHomeTeam(game.homeTeam));
    const awayTeam = useRef(getAwayTeam(game.awayTeam));

    return (
        <React.Fragment>
            <div className='gamePage__title'>
                {game.name}
            </div>
            <GameCard homeTeam={homeTeam} awayTeam={awayTeam} />
        </React.Fragment>
    );
};

export default GamePage;