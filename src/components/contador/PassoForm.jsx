import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passo-input">Passo:</label>
            <input
                type="number"
                id="passo-input"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)}
            />
        </div>
    );
}