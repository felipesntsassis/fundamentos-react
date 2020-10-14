import React from 'react';

import Botoes from './Botoes';
import Display from './Display';
import PassoForm from './PassoForm';

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: +novoPasso
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display
                    numero={this.state.numero}
                />
                <PassoForm 
                    passo={this.state.passo}
                    setPasso={this.setPasso}
                />
                <Botoes
                    setDec={this.decrement}
                    setInc={this.increment}
                />
            </div>
        );
    }

}
