import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import { LISTA_AUTORES } from '../../queries';

class DropDownAutores extends Component {
    render(){
        return (
            <div className="form-group">
                <label htmlFor="libro-autor">Autor</label>
                <select id="libro-autor" name="autor" className="form-control" onChange={ this.props.onSeleccionarAutor }>
                    { this.props.data.autores && this.props.data.autores.map( autor => (
                        <option value={ autor.id } key={ autor.id }>{ autor.nombre }</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default graphql(LISTA_AUTORES)(DropDownAutores);