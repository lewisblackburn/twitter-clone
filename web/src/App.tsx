import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import css from "./App.module.scss";
import { Users } from "./components/Users";

// create client
// use it by passing it in provider: This gives access to backend from front end
const client = new ApolloClient({
   uri: "http://localhost:4000",
   cache: new InMemoryCache(),
});

function App() {
   return (
      <ApolloProvider client={client}>
         <div className={css.app}>
            <Users />
         </div>
      </ApolloProvider>
   );
}

export default App;
