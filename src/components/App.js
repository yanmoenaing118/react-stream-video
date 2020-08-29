import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import styles from "./../styles/App.module.scss";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "./history";

const App = (props) => {
  return (
    <Router history={history}>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
