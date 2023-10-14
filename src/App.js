import DmHeader from './components/DmHeader/DmHeader.jsx';
import DmDashBoard from './components/dashboad/DmDashboad.jsx';
import './App.css';
import React from 'react';

function App() {
  const name = 'Sarah green';
  return (
    <div className="App">
      <DmHeader className="header" name={name} />
      <DmDashBoard name={name} />
    </div>
  );
}

export default App;
