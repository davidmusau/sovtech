import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
//https://sovtechserver.herokuapp.com/api
// const client = new ApolloClient({
//     uri: 'https://graphqlzero.almansi.me/api',
//     cache: new InMemoryCache()
// });
//
// export default client;
export const link = createHttpLink({
    uri: "https://sovtechserver.herokuapp.com/api"
});

 const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});
export default client;