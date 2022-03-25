# sovtech

#  Server - apollo graphql API backend
  --- Backend  packages used
        express : The Javascript server side framework
        apollo-server-express: Allows us to setup a GraphQL API on top of Express
        graphql: Allows us to write GraphQL in Javascript 


Create an asynchronous function to start the server.
     startServer()
        
**typeDefs** define your API schema. Here you describe what data can be read and mutated by the frontend. For example:
        - Fetch a list of people
        - Fetch details about a person
        - Fetch /search person by name
        - pagination of the persons data


**resolvers** are responsible for handling the logic and response for each typeDef you defined. It's where the business logic is executed
**typeDefs** you might have defined a query to fetch a list of people and dataSources as well

foundation model
typeDefs describe the queries  available in the API
resolvers handle the logic and send the data back in the response