import React from 'react';
import { useRef } from 'react';
import './styles/GameCard.scss';

import TeamCard from '../TeamCard/TeamCard';
import { playersData } from '../../mocks/playersMock';

const allPlayersFetch = () => playersData;

const getHomeTeamPlayers = homePlayerIds => {
    return allPlayersFetch().filter(player => homePlayerIds.includes(player.id));
};
const getAwayTeamPlayers = awayPlayerIds => {
    return allPlayersFetch().filter(player => awayPlayerIds.includes(player.id));
};

const GameCard = ({
    homeTeam,
    awayTeam
}) => {
    const homeTeamPlayers = useRef(getHomeTeamPlayers(homeTeam.current.players));
    const awayTeamPlayers = useRef(getAwayTeamPlayers(awayTeam.current.players));
    return (
        <div className='gameCard__container'>
            <div className='gameCard__homeTeam--container'>
                <TeamCard teamName={homeTeam.current.name} players={homeTeamPlayers.current}></TeamCard>
            </div>
            <div className='gameCard__awayTeam--container'>
                <TeamCard teamName={awayTeam.current.name} players={awayTeamPlayers.current}></TeamCard>
            </div>
        </div>
    );
};

export default GameCard;
