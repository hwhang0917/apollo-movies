import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "../Style/GlobalStyle";
import Header from "./Header";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  </>
);

export default App;
