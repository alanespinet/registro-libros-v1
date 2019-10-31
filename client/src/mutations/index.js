import gql from 'graphql-tag';

export const ELIMINAR_LIBRO = gql`
    mutation EliminarLibro($id: ID!){
        eliminarLibro(id: $id){
            id
        }
    }
`;

export const ELIMINAR_AUTOR = gql`
    mutation EliminarAutor($id: ID!){
        eliminarAutor(id: $id){
            id
        }
    }
`;