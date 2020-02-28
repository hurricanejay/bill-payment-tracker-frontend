import React from 'react';
import './App.css';
import Bill from './containers/Bill';
import Form from './containers/Form';

class BillList extends React.Component {
  render() {
    return (
      <div className="BillList">
        <h1>hello?</h1>
        
        <Bill />
        <Form />
        
      </div>
    );

  }
}

export default BillList;
