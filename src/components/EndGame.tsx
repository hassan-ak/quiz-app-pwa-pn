// Imports
// React Imports
import React from 'react';

// Props Type defination
type Props = {
    callback: any;
}

// EndGame function export
export const EndGame : React.FC<Props> = ({callback}) => {
    return (
        <div className='endGame'>
            <button onClick={callback}>
                End Game
            </button>
        </div>
    )
}