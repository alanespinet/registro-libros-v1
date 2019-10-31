import gql from 'graphql-tag';

export const LISTA_LIBROS = gql`
    query {
        libros {
            id
            titulo
            idioma
            edicion
            autor {
                nombre
            }
        }
    }
`;

export const VER_LIBRO = gql`
    query VerLibro($id: ID!){
        libro(id: $id){
            id
            titulo
            idioma
            edicion
            autor {
                nombre
                nacionalidad
            }
        }
    }
`;

export const LISTA_AUTORES = gql`
    query {
        autores {
            id
            nombre
            nacionalidad
        }
    }
`;
