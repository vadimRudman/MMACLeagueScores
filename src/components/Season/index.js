import React, { useState } from 'react';
import { seasonsData } from '../../mocks/seasonsMock';
import { team1, team2, team3, team4 } from '../../mocks/teamsMock';
import { game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12 } from '../../mocks/gamesMock';
import BasicPage from '../BasicPage/BasicPage';

const LandingPage = () => {
    const seasonFetcher = () => seasonsData[0];
    const teamsFetcher = teamIds => {
        const teams = [];
        teams.push(team1);
        teams.push(team2);
        teams.push(team3);
        teams.push(team4);
        return teams;
    }
    const gamesFetcher = gameIds => {
        const games = [];
        games.push(game1);
        games.push(game2);
        games.push(game3);
        games.push(game4);
        games.push(game5);
        games.push(game6);
        games.push(game7);
        games.push(game8);
        games.push(game9);
        games.push(game10);
        games.push(game11);
        games.push(game12);
        return games;
    }
    const [season, setSeason] = useState(seasonFetcher);
    const [teams, setTeams] = useState(teamsFetcher(season.teams));
    const [games, setGames] = useState(gamesFetcher(season.games));

    return (
        <div>
            <BasicPage title={season.name} leftNextLocation='team' leftSideData={teams} rightNextLocation='game' rightSideData={games} />
            <div className='buttons-wrapper'>
                <button>Add Team</button>
                <button>Add Game</button>
            </div>
        </div>
    )
};

export default LandingPage;