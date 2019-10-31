import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Libro from './Libro';

import { LISTA_LIBROS } from '../queries';

class ListaLibros extends Component {
    onGoToAdicionar = () => {
        this.props.history.push('/libros/adicionar');
    }

    render(){
        return (
            <div className="listaLibros">
                <h1 className="text-center pb-4">Lista de Libros</h1>
                <button 
                    type="button" 
                    className="btn btn-primary mb-4"
                    onClick={ this.onGoToAdicionar }
                >Adicionar Libro</button>
    
                <ul className="list-group">
                    { this.props.data.libros && this.props.data.libros.map(libro => (
                        <Libro 
                            key={ libro.id }
                            id={ libro.id }
                            titulo={ libro.titulo }  
                            autor={ libro.autor.nombre }
                        />
                    )) }
                </ul>
            </div>
        );
    }
};

export default graphql(LISTA_LIBROS)(ListaLibros);