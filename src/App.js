import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import List from './pages/List';
import Edit from './pages/Edit';
import View from './pages/View';
import Create from './pages/Create';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={List}></Route>
          <Route exact path="/create" component={Create}></Route>
          <Route exact path="/edit/:id" component={Edit}></Route>
          <Route exact path="/view/:id" component={View}></Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
