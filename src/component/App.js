import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import PostList from './PostList';
import Profile from './Profile';
import Welcome from './Welcome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/welcome' component={Welcome} />
        <Route path='/profile' component={Profile} />
        <Route path='/main' component={PostList} />
      </Switch>
    </Router>
  );
}

export default App;
