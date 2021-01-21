import React from 'react';
import { useState } from 'react';
import './styles/TeamCard.scss';

import PlayerRow from '../PlayerRow/PlayerRow';

const TeamCard = ({
    teamName,
    players
}) => {
    const [teamPlayers, setTeamPlayers] = useState(players);
    const [pointTotal, setPointTotal] = useState(0);
    const [teamTimeouts, setTeamTimeouts] = useState(4);
    const [teamFouls, setTeamFouls] = useState(0);
    const [selectedPlayerId, setSelectedPlayerId] = useState(0);

    const getDefaultOrder = () => {
        return players.map(player => player.id);
    }
    const [playerOrder, setPlayerOrder] = useState(getDefaultOrder);

    const swapPlayerOrder = (selectedPlayer, swappingPlayer) => {
        const selectedPlayerIndex = playerOrder.indexOf(selectedPlayer);
        const swappingPlayerIndex = playerOrder.indexOf(swappingPlayer);
        const updatedOrder = playerOrder.map((player, index) => {
            if (index === selectedPlayerIndex) return playerOrder[swappingPlayerIndex];
            if (index === swappingPlayerIndex) return playerOrder[selectedPlayerIndex];
            return player;
        });
        setPlayerOrder(updatedOrder);
    }

    const selectPlayer = playerId => {
        setSelectedPlayerId(playerId);
    };

    const swapPlayer = playerId => {
        if (selectedPlayerId !== 0) {
            swapPlayerOrder(playerId, selectedPlayerId);
        }
    }

    const renderPlayerRow = (playerId, index) => {
        const player = players.find(player => player.id === playerId);
        return (
            <PlayerRow
                key={`${player.id}`}
                playerData={player}
                isSelected={player.id === selectedPlayerId}
                isActive={index <= 4}
                onSelect={selectPlayer}
                onSwap={swapPlayer}
            />
        );
    };

    

    const playerRows = playerOrder.map(renderPlayerRow);

    return (
        <div className='teamCard__container'>
            <div className='teamCard__tableHeader'>
                <div className='teamCard__team tableCell'>{teamName}</div>
                <div className='teamCard__totalPoints tableCell'>Total: {pointTotal}</div>
                <div className='teamCard__timeOuts tableCell'>Timeouts: {teamTimeouts}</div>
                <div className='teamCard__teamFouls tableCell'>Team Fouls: {teamFouls}</div>
            </div>
            <div className='teamCard__playerRows--header'>
                <div className='teamCard__jerseyNumber tableCell'>
                    Number
                </div>
                <div className='teamCard__playerName tableCell'>
                    Player Name
                </div>
                <div className='teamCard__fieldGoals tableCell'>
                    Field Goals
                </div>
                <div className='teamCard__freeThrows tableCell'>
                    Free Throws
                </div>
                <div className='teamCard__points tableCell'>
                    Total Points
                </div>
                <div className='teamCard__assists tableCell'>
                    Assists
                </div>
                <div className='teamCard__rebounds tableCell'>
                    Rebounds
                </div>
                <div className='teamCard__fouls tableCell'>
                    Fouls
                </div>
            </div>
            <div className='teamCard__playerRows'>
                {playerRows}
            </div>
        </div>
    );
};

export default TeamCard;
