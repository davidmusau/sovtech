import {createServer} from "http";
import express from "express";
import {ApolloServer, gql} from "apollo-server-express";
import cors from "cors";
import {schema} from "./graphql/schema";

const startServer = async  () =>{

    const app = express();
    const port = process.env.PORT || 5000
    app.use(cors())

    const httpServer = createServer(app)

    const apolloServer = new ApolloServer({
        schema,
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