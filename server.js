const express = require('express');
const expressGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://admin:admin123@ds339968.mlab.com:39968/librosfavoritos';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const port = process.env.PORT || 4200;
const root = path.join(__dirname, 'client', 'build');

app.use( cors() );
app.use('/graphql', expressGraphQL({
    schema: makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    graphiql: false
}));

app.use(express.static(root));
app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

app.listen(port, () => console.log(`Application FAVORITE BOOKS running on port ${port}`));