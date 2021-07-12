import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Button } from '@material-ui/core'
import EnhancedTable from './inventoryTable';
// Hello World.
function App() {
  return ( 
    <div className="App">
      <header>
        <h1>Full Circle</h1>
      </header>
      <div className="ButtonRow">
        <Button variant="contained">
          Make Request
        </Button>
        <Button variant="contained">
          Pickups
        </Button>
      </div>
      {EnhancedTable()}
    </div>
  )
}

export default App;
