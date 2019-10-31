import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { ELIMINAR_AUTOR } from '../mutations';
import { LISTA_AUTORES } from '../queries';

class Autor extends Component {
    onEliminarAutor = event => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                id: this.props.id
            },
            refetchQueries: [{ query: LISTA_AUTORES }]
        })
            .then( () => alert('SUCCESS: Autor Eliminado') );
    }

    render(){
        const buttonStyle = {
            width: '100px'
        }

        return (
            <li className="autor list-group-item">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7">
                        <span className="text-primary">{ this.props.nombre }</span> - nacionalidad: { this.props.nacionalidad }
                    </div>

                    <div className="col-12 col-md-5 text-md-right mt-3 mt-md-0">
                        <button type="button" className="btn btn-danger" style={ buttonStyle } onClick={ this.onEliminarAutor }>Eliminar</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default graphql(ELIMINAR_AUTOR)(Autor);