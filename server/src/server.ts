import {createServer} from "http";
import express from "express";
import {ApolloServer, gql} from "apollo-server-express";
import cors from "cors";
import {schema} from "./graphql/schema";
import dataSources from "./datasource/dataSource";
import path from "path";


const startServer = async  () =>{

    const app = express();
    const port = process.env.PORT || 4000
    app.use(cors({origin:"*"}))
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });

    const httpServer = createServer(app)

    const apolloServer = new ApolloServer({
        schema,
        dataSources
    })
    await apolloServer.start()

    apolloServer.applyMiddleware({
        app,
        path: '/api'
    })
    
    httpServer.listen({ port}, () =>
        console.log(`🚀 Apollo GraphQL-Server is running on http://localhost:${port}${apolloServer.graphqlPath}`)
    )

}

startServer();