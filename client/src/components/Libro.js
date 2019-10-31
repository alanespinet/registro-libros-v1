import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';

import { ELIMINAR_LIBRO } from '../mutations';
import { LISTA_LIBROS } from '../queries';

class Libro extends Component {
    onVerLibro = event => {
        event.preventDefault();
        this.props.history.push(`/libros/${ this.props.id }`);
    }

    onEliminarLibro = event => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                id: this.props.id
            },
            refetchQueries: [{ query: LISTA_LIBROS }]
        })
            .then( () => alert('SUCCESS: Libro Eliminado') );
    }

    render(){
        const buttonStyle = {
            width: '100px'
        }

        return (
            <li className="libro list-group-item">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7">
                        { this.props.titulo } - { this.props.autor }
                    </div>

                    <div className="col-12 col-md-5 text-md-right mt-3 mt-md-0">
                        <button type="button" className="btn btn-info mr-2" style={ buttonStyle } onClick={ this.onVerLibro }>Ver</button>
                        <button type="button" className="btn btn-danger" style={ buttonStyle } onClick={ this.onEliminarLibro }>Eliminar</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default graphql(ELIMINAR_LIBRO)(withRouter(Libro));