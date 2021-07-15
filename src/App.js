import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core'
import EnhancedTable from './inventoryTable';
import requestOver from './requestOver'
import { Domain } from '@material-ui/icons';

function App() {

  return (
    <div classname="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/requests" component={requestOver} />
      </Router>
    </div>
  )
}

const Home = () => (
  <div>
    <header>
      <h1>Full Circle</h1>
    </header>
    <Router>
      <Button variant="contained" href="/requests">
        Make Request
      </Button>
      <Button variant="contained">
        Pickups
      </Button>
    </Router>
    {EnhancedTable()}
  </div>
);

export default App;