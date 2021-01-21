import React from 'react';
import { useState } from 'react';
import './styles/PlayerRow.scss';

const PlayerRow = ({
    playerData,
    isSelected,
    isActive,
    onSelect,
    onSwap
}) => {
    const { name, number, id } = playerData;
    const [isPlaying, setIsPlaying] = useState(false);

    const [playerName, setPlayerName] = useState(name);
    const [jerseyNumber, setJerseyNumber] = useState(number);
    const [fieldGoals, setFieldGoals] = useState([]);
    const [freeThrows, setFreeThrows] = useState([]);
    const [points, setPoints] = useState(0);
    const [assists, setAssists] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [fouls, setFouls] = useState([]);

    const handleSelect = () => {
        console.log(isActive);
        if (isSelected) {
            return;
        }
        onSelect(id);
    }

    const handleSwap = e => {
        if (isSelected) {
            return;
        }
        onSwap(id);
        e.stopPropagation();
    }

    return (
        <div className='playerRow__container' onClick={handleSelect}>
            <input className='playerRow__jerseyNumber tableCell'
                value={jerseyNumber}
                onChange={e => setJerseyNumber(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__playerName tableCell'
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__fieldGoals tableCell'
                value={fieldGoals}
                onChange={e => setFieldGoals(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__freeThrows tableCell'
                value={freeThrows}
                onChange={e => setFreeThrows(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__points tableCell'
                value={points}
                onChange={e => setPoints(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__assists tableCell'
                value={assists}
                onChange={e => setAssists(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__rebounds tableCell'
                value={rebounds}
                onChange={e => setRebounds(e.target.value)}
                disabled={!isSelected}
            />
            <input className='playerRow__fouls tableCell'
                value={fouls}
                onChange={e => setFouls(e.target.value)}
                disabled={!isSelected}
            />
            <div onClick={handleSwap}>
                testest
            </div>
        </div>
    );
};

export default PlayerRow;
