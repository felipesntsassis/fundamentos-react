import React from 'react';

import If, { Else } from './if';

export default props => {
    const { usuario } = props || {};

    return (
        <div>
            {/* <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>!
            </If> */}
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    );
}