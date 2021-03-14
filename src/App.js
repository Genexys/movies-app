import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Movies from './components/Movies';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
        <BrowserRouter>
            <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/" render={() => <Redirect to="/movies" />} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
