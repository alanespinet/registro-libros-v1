const typeDefs = `
    type Libro {
        id: ID!
        titulo: String!
        idioma: String!
        edicion: Int
        autor: Autor!
    }

    type Autor {
        id: ID!
        nombre: String!
        nacionalidad: String
    }

    type Query {
        saludar: String
        libros: [Libro]
        autores: [Autor]
        libro(id: ID!): Libro
        autor(id: ID!): Autor
    }

    type Mutation {
        adicionarLibro(
            titulo: String!, 
            idioma: String!, 
            edicion: Int,
            autor: ID!): Libro
        
        adicionarAutor(nombre: String!, nacionalidad: String): Autor

        eliminarLibro(id: ID!): Libro

        eliminarAutor(id: ID!): Autor
    }
`;

module.exports = typeDefs;