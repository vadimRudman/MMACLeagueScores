import React from 'react';

const ButtonsList = ({
    items
}) => {
    const renderButton = button => {
        const { text, location } = button;
        console.log(location); //temp
        return (
            <button>
                {text}
            </button>
        )
    }
    return (
        <div className='buttonsContainer'>
            {items.forEach(item => renderButton(item))}
        </div>
    )
};

export default ButtonsList;
