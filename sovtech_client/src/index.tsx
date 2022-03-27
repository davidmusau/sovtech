import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import '../src/common/styles/index.css';
import App from './components/App/App';
const client = new ApolloClient({
    uri: 'https://sovtechserver.herokuapp.com/api',
    cache: new InMemoryCache(),
});
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();