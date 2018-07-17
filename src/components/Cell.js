import React from 'react';
import './Cell.css';

const Cell = (props) => {

    return (
        <div className={`cell-container ${props.checked ? 'red' : 'blue'}`}>
            <div className="cell-content">
                <div><span>{props.value}</span></div>
            </div>
        </div>
    );
}

export default Cell;