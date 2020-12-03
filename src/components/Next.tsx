// Imports
// React Imports
import React from 'react';

// Props Type defination
type Props = {
    callback: any;
}

// Next Component Function
export const Next : React.FC<Props> = ({callback}) => {
    return (
        <div className='next'>
            <button  onClick={callback}>
                Next
            </button>
        </div>
    )
}