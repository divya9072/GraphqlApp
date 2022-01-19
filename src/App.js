import './App.css';
import Adduser from "./adduser"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
    <Adduser/> 
    </ApolloProvider>

  );
}

export default App;
