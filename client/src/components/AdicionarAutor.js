import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { LISTA_AUTORES } from '../queries';

const defaultState = {
    nombre: '',
    nacionalidad: ''
}

class AdicionarAutor extends Component {
    state = defaultState;

    onValueChange = event => {
        const { name, value } = event.target;        
        this.setState({
            [name]: value    
        });
    }

    onCancel = event => {
        event.preventDefault();
        this.props.history.push('/autores');
    }

    onAdicionar = event => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                nombre: this.state.nombre,
                nacionalidad: this.state.nacionalidad
            },
            refetchQueries: [{ query: LISTA_AUTORES }]
        })
            .then( () => { this.props.history.push('/autores') } );
    }

    render(){
        const buttonStyle = {
            width: '100px'
        };

        return (
            <div className="adicionar-autor">
                <h1 className="text-center pb-4">Adicionar Autor</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="autor-nombre">Autor:</label>
                        <input type="text" name="nombre" className="form-control" id="autor-nombre" value={ this.state.nombre } onChange={ this.onValueChange } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="autor-nacionalidad">Nacionalidad:</label>
                        <input type="text" name="nacionalidad" className="form-control" id="autor-nacionalidad" value={ this.state.idioma } onChange={ this.onValueChange } />
                    </div>

                    <div className="text-right mt-4">
                        <button className="btn btn-danger" onClick={ this.onCancel } style={ buttonStyle }>Cancelar</button>
                        <button className="btn btn-success ml-3" onClick={ this.onAdicionar } style={ buttonStyle }>Aceptar</button>
                    </div>
                </form>
            </div>
        );
    }
}

const ADICIONAR_AUTOR = gql`
    mutation M_AdicionarAutor($nombre: String!, $nacionalidad: String!){
        adicionarAutor(
            nombre: $nombre, 
            nacionalidad: $nacionalidad){
                id
                nombre
                nacionalidad
            }
    }
`;

export default graphql(ADICIONAR_AUTOR)(AdicionarAutor);