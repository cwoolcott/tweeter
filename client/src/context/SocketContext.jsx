import { createContext, useContext, useReducer } from 'react';
import io from "socket.io-client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const PORT = process.env.PORT || 3001;

const socket = io.connect("tweeter-tkk8.onrender.com:" + PORT);

const client = new ApolloClient({
    uri: 'http://tweeter-tkk8.onrender.com:' + PORT + '/graphql',
    cache: new InMemoryCache()
})

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={socket}>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </SocketContext.Provider>
    )
}