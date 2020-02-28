import React from 'react';
import './App.css';
import BillList from './components/BillList';
import Payment from './components/Payment';
import NavBar from './component/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>hello?</h1>
        
        <NavBar />
        <BillList />
        <Payment />
        
      </div>
    );

  }
}

export default App;
