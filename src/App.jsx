import { useState } from 'react';
import { List } from './components/List';
import { Details } from './components/Details';
import './App.css';

function App() {
  const [selectedUser, changeSelectedUser] = useState({});

  return (
    <div className="App container">
      <div className="row mt-4">
        <div className="col-4">
          <List 
            selectedUser={selectedUser}
            onSelect={changeSelectedUser}
          />
        </div>
        <div className="col-3">
          <Details info={selectedUser} />
        </div>
      </div>
    </div>
  )
}

export default App