// React
import * as React from "react";
import * as ReactDOM from "react-dom";
// Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// App
import App from "./components/App";

const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
