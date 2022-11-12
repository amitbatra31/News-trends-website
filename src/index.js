import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ckl80phv.us.auth0.com"
    clientId="lfOgtoAb9DJ58B3sV7HpM5wGsNPhwD1p"
    redirectUri={window.location.origin}
  >
    <Main />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
