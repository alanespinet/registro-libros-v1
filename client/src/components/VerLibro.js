import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { VER_LIBRO } from '../queries';

class VerLibro extends Component {
    onVolverALista = event => {
        event.preventDefault();
        this.props.history.push('/libros');
    }

    render(){
        return (
            <div className="ver-libro">
                {!this.props.data.loading && (
                    <div>
                        <h1 className="text-center pb-4">{ this.props.data.libro.titulo }</h1>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <p className="text-primary mb-0">Idioma</p>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <p className="mb-0">{ this.props.data.libro.idioma }</p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <p className="text-primary mb-0">Año de Edición</p>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <p className="mb-0">{ this.props.data.libro.edicion }</p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <p className="text-primary mb-0">Autor</p>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <p className="mb-0">{ this.props.data.libro.autor.nombre }</p>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <p className="text-primary mb-0">Nacionalidad del Autor</p>
                                    </div>

                                    <div className="col-12 col-md-8">
                                        <p className="mb-0">{ this.props.data.libro.autor.nacionalidad }</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-3">
                            <button className="btn btn-primary" type="button" onClick={ this.onVolverALista }>Volver a la Lista</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default graphql(VER_LIBRO, {
    options: props => ({
        variables: {
            id: props.match.params.id
        }
    })
})(VerLibro);