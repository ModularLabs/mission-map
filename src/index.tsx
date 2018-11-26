// React
import * as React from "react";
import * as ReactDOM from "react-dom";
// Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import defaults from "./apollo/defaults";
import gql from "graphql-tag";
// App
import App from "./components/App";

const GET_TODOS = gql`
  {
    todos @client
    visibilityFilter @client
  }
`;

const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers: {}
  }
});

const ApolloLocalReader = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos, visibilityFilter } }) => {
      console.log(todos);
      return <div>hey</div>;
    }}
  </Query>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ApolloLocalReader />
  </ApolloProvider>,
  document.getElementById("root")
);
