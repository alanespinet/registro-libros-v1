import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import ListaLibros from './components/ListaLibros';
import AdicionarLibro from './components/AdicionarLibro';
import AdicionarAutor from './components/AdicionarAutor';
import VerLibro from './components/VerLibro';

import ListaAutores from './components/ListaAutores';

import Main from './components/layout/Main';
import Header from './components/layout/Header'

import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: 'https://registro-libros-v1.herokuapp.com/graphql'
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <BrowserRouter>
            <>
                <Header />
                <Main>
                    <Switch>
                        <Route path="/" exact={true} component={App} />
                        <Route path="/libros" exact={true} component={ListaLibros} />
                        <Route path="/libros/adicionar" component={AdicionarLibro} />
                        <Route path="/libros/:id" component={VerLibro} />
                        <Route path="/autores" exact={true} component={ListaAutores} />
                        <Route path="/autores/adicionar" component={AdicionarAutor} />
                    </Switch>
                </Main>
            </>
        </BrowserRouter>
    </ApolloProvider>, 
document.getElementById('root'));

