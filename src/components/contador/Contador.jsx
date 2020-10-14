import React from 'react';

import './Contador.css'

export default class Contador extends React.Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <div>
                    <label htmlFor="passo-input">Passo:</label>
                    <input type="number" id="passo-input" value={this.state.passo}
                        onChange={this.setPasso}/>
                </div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

}
