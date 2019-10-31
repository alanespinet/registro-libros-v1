import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { LISTA_AUTORES } from '../queries';
import Autor from './Autor';

class ListaAutores extends Component {
    onGoToAdicionar = event => {
        event.preventDefault();
        this.props.history.push('/autores/adicionar');
    }
    
    render(){        
        return (
            <div className="lista-autores">
                <h1 className="text-center pb-4">Lista de Autores</h1>

                <button 
                    type="button" 
                    className="btn btn-primary mb-4"
                    onClick={ this.onGoToAdicionar }
                >Adicionar Autor</button>

                <ul className="list-group">
                    { this.props.data.autores && this.props.data.autores.map(autor => (
                        <Autor 
                            key={ autor.id }
                            id={ autor.id }
                            nombre={ autor.nombre }
                            nacionalidad={ autor.nacionalidad }
                        />
                    )) }
                </ul>
            </div>
        );
    }
}

export default graphql(LISTA_AUTORES)(ListaAutores);