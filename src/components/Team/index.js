import React, { useState } from 'react';
import { teamsData } from '../../mocks/teamsMock';
import { playersData } from '../../mocks/playersMock';
import { gamesData } from '../../mocks/gamesMock';
import BasicPage from '../BasicPage/BasicPage';

const TeamPage = () => {
    const teamFetcher = () => teamsData[0];
    const allGamesFetcher = () => gamesData;
    const allPlayersFetcher = () => playersData;

    const playersFetcher = playerIds => {
        return allPlayersFetcher().filter(player => playerIds.includes(player.id));
    }
    const gamesFetcher = gameIds => {
        return allGamesFetcher().filter(game => gameIds.includes(game.id));
    }
    const [team] = useState(teamFetcher());
    const { games, players } = team;
    const [teamGames, setGames] = useState(gamesFetcher(games));
    const [teamPlayers, setTeamPlayers] = useState(playersFetcher(players));

    return (
        <div>
            <BasicPage title={team.name} leftNextLocation='player' leftSideData={teamPlayers} rightNextLocation='game' rightSideData={teamGames} />
            <div className='buttons-wrapper'>
                <button>Add Plyaer</button>
                <button>Add Game</button>
            </div>
        </div>
    );
};

export default TeamPage;