import React from 'react';
import { useState } from "react";

import './Mega.css';

export default props => {

    const [qtd, setQtd] = useState(props.qtd || 6);
    const initialNumbers = generateNumbers(qtd);
    const [numbers, setNumbers] = useState(initialNumbers);

    function generateNumbers(qtd) {
        const numbers = Array(qtd).fill(0)
            .reduce((nums) => {
                    const newNumber = generateUniqueNumber(1, 60, nums);

                    return [...nums, newNumber];
                }, []
            )
            .sort((n1, n2) => n1 - n2);

        return numbers;
    }

    function generateUniqueNumber(min, max, array) {
        const rand = parseInt(Math.random() * ((max + 1) - min) + min);

        return array.includes(rand) ? generateUniqueNumber(min, max, array) : rand;
    }

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input 
                    type="number"
                    value={qtd}
                    min="6"
                    max="15"
                    onChange={e => {
                        setQtd(+e.target.value);
                        setNumbers(generateNumbers(+e.target.value));
                    }}/>
            </div>
            <button onClick={_ => setNumbers(generateNumbers(qtd))}>Gerar Números</button>
        </div>
    );
};
