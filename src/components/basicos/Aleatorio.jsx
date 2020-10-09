import React from 'react';

export default (props) => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min) + min);

    return (
        <div>
            <h2>Valores Aleatórios</h2>
            <p>
                <strong>Valor mínimo:</strong> {min}
            </p>
            <p>
                <strong>Valor máximo:</strong> {max}
            </p>
            <p>
                <strong>Valor aleatório:</strong> {random}
            </p>
        </div>
    );
}