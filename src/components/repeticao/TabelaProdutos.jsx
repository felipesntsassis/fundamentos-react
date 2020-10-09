import React from 'react';

import produtos from '../../data/produtos';
import './Repeticao.css';

export default props => {
    function getRows() {
        return produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            );
        });
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    );
}
