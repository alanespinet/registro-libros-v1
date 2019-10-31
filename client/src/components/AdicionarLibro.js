import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { LISTA_LIBROS } from '../queries';

import DropDownAutores from './parts/DropDownAutores';

const defaultState = {
    titulo: '',
    idioma: '',
    edicion: '',
    autor: ''
}

class AdicionarLibro extends Component {
    state = defaultState;
    
    onCancel = event => {
        event.preventDefault();
        this.props.history.push('/libros');
    }

    onSeleccionarAutor = event => {
        this.setState({
            autor: event.target.value
        });
    }

    onAdicionar = event => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                titulo: this.state.titulo,
                idioma: this.state.idioma,
                edicion: parseInt(this.state.edicion),
                autor: this.state.autor
            },
            refetchQueries: [{ query: LISTA_LIBROS }]
        })
            .then( () => { this.props.history.push('/libros') } );
    }

    onValueChange = event => {
        const { name, value } = event.target;        
        this.setState({
            [name]: value    
        });
    }
    
    render(){
        const buttonStyle = {
            width: '100px'
        };

        return (
            <div className="adicionar-libro">
                <h1 className="text-center pb-4">Adicionar Libro</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="libro-titulo">Título:</label>
                        <input type="text" name="titulo" className="form-control" id="libro-titulo" value={ this.state.titulo } onChange={ this.onValueChange } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="libro-idioma">Idioma:</label>
                        <input type="text" name="idioma" className="form-control" id="libro-idioma" value={ this.state.idioma } onChange={ this.onValueChange } />
                    </div>

                    <div className="form-group">
                        <label htmlFor="libro-edicion">Año de Edición:</label>
                        <input type="number" name="edicion" className="form-control" id="libro-edicion" value={ this.state.edicion } onChange={ this.onValueChange } />
                    </div>

                    <DropDownAutores onSeleccionarAutor={ this.onSeleccionarAutor } />

                    <div className="text-right mt-4">
                        <button className="btn btn-danger" onClick={ this.onCancel } style={ buttonStyle }>Cancelar</button>
                        <button className="btn btn-success ml-3" onClick={ this.onAdicionar } style={ buttonStyle }>Aceptar</button>
                    </div>
                </form>
            </div>
        );
    }
}

const ADICIONAR_LIBRO = gql`
    mutation AdicionarLibro($titulo: String!, 
                            $idioma: String!, 
                            $edicion: Int!,
                            $autor: ID!){
        adicionarLibro(
            titulo: $titulo, 
            idioma: $idioma, 
            edicion: $edicion,
            autor: $autor){
                id
                titulo
                idioma
                edicion
            }
    }
`;

export default graphql(ADICIONAR_LIBRO)(AdicionarLibro);