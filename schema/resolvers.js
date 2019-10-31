const Libro = require('../models/libro');
const Autor = require('../models/autor');

const resolvers = {
    Libro: {
        edicion: async (parent, args, info, context) => {
            return parent.anioEdicion;
        },

        autor: async (parent, args, info, context) => {
            const { autor } = parent;
            return await Autor.findById(autor);
        }
    },
    
    Query: {
        saludar: () => {
            return 'Hola, bienvenido a GraphQL';
        },

        libros: async () => {
            return await Libro.find({});
        },

        autores: async () => {
            return await Autor.find({});
        },

        libro: async (parent, args, info, context) => {
            const { id } = args;
            return await Libro.findById(id);
        },

        autor: async (parent, args, info, context) => {
            const { id } = args;
            return await Autor.findById(id);
        }
    },

    Mutation: {
        adicionarLibro: async (parent, args, info, context) => {
            const { titulo, idioma, edicion, autor } = args;
            const nuevoLibro = new Libro({
                titulo,
                idioma,
                anioEdicion: edicion,
                autor
            });
            return await nuevoLibro.save();
        },

        adicionarAutor: async (parent, args, info, context) => {
            const { nombre, nacionalidad } = args;
            const nuevoAutor = new Autor({
                nombre,
                nacionalidad
            });
            return await nuevoAutor.save();
        },

        eliminarLibro: async (parent, args, info, context) => {
            const { id } = args;
            return await Libro.findByIdAndDelete(id);
        },

        eliminarAutor: async (parent, args, info, context) => {
            const { id } = args;
            return await Autor.findByIdAndDelete(id);
        }
    }
}

module.exports = resolvers;