import React from 'react';

import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx";

import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

import Contador from "./components/contador/Contador";

import Input from './components/formulario/Input';

import Card from './components/layout/Card';

import Mega from './components/mega/Mega';

import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";


import './App.css';

export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#13 - Desafio Mega Sena" color="#2ecc71">
                <Mega />
            </Card>
            <Card titulo="#12 - Contador" color="#c0392b">
                <Contador numeroInicial={300} />
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#7f8c8d">
                <Input />
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#f39c12">
                <IndiretaPai />
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#2c3e50">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#1abc9c">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{nome: 'Felipe'}} />
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#1abc9c">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - Repetição" color="#9b59b6">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Isabelle" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
);
