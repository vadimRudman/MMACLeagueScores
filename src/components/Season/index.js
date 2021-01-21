import React, { useState } from 'react';
import { seasonsData } from '../../mocks/seasonsMock';
import { teamsData } from '../../mocks/teamsMock';
import { gamesData } from '../../mocks/gamesMock';
import BasicPage from '../BasicPage/BasicPage';

const seasonFetcher = () => seasonsData[0];
const allTeamsFetcher = () => teamsData;
const allGamesFetcher = () => gamesData;

const teamsFetcher = teamIds => {
    return allTeamsFetcher().filter(team => teamIds.includes(team.id));
}
const gamesFetcher = gameIds => {
    return allGamesFetcher().filter(game => gameIds.includes(game.id));
}

const SeasonsPage = () => {
    const [season, setSeason] = useState(seasonFetcher);
    const { teams, games } = season;

    const [seasonTeams, setTeams] = useState(teamsFetcher(teams));
    const [seasonGames, setGames] = useState(gamesFetcher(games));

    return (
        <div>
            <BasicPage title={season.name} leftNextLocation='team' leftSideData={seasonTeams} rightNextLocation='game' rightSideData={seasonGames} />
            <div className='buttons-wrapper'>
                <button>Add Team</button>
                <button>Add Game</button>
            </div>
        </div>
    )
};

export default SeasonsPage;