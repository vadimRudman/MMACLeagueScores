import React, { useState } from 'react';
import { team1 } from '../../mocks/teamsMock';
import { player1, player2, player3, player4, player5, player6, player7 } from '../../mocks/playersMock';
import { game1, game4, game5, game7, game10, game11 } from '../../mocks/gamesMock';
import BasicPage from '../BasicPage/BasicPage';

const LandingPage = () => {
    const teamFetcher = () => team1;
    const playersFetcher = playerIds => {
        const players = [];
        players.push(player1);
        players.push(player2);
        players.push(player3);
        players.push(player4);
        players.push(player5);
        players.push(player6);
        players.push(player7);
        return players;
    }
    const gamesFetcher = gameIds => {
        const games = [];
        games.push(game1);
        games.push(game4);
        games.push(game5);
        games.push(game7);
        games.push(game10);
        games.push(game11);
        return games;
    }
    const [team] = useState(teamFetcher());
    const [games, setGames] = useState(gamesFetcher(team.games));
    const [players, setPlayers] = useState(playersFetcher(team.players));

    return (
        <div>
            <BasicPage title={team.name} leftNextLocation='player' leftSideData={players} rightNextLocation='game' rightSideData={games} />
            <div className='buttons-wrapper'>
                <button>Add Plyaer</button>
                <button>Add Game</button>
            </div>
        </div>
    );
};

export default LandingPage;