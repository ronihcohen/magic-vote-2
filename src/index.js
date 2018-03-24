import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";
import PollsList from "./PollsList/PollsList";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cje9fbdt00wys0141421q7x6i"
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <div className={style.wrapper}>
        <h1>Magic Vote</h1>
        <GoogleSignIn />
        <PollsList />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
