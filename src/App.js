import React from 'react';
import './App.css';
import BillList from './Containers/BillList';
import Payment from './Containers/Payment';
import NavBar from './Containers/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  state = { bills: [], payments: []}

  addBill = (bill) => {
    // console.log("ADDBILL")
    this.setState({ payments: [...this.state.payments, bill]})
  }


  paidBill = (bill) => {
    this.setState({ payments: this.state.payments.filter(paymentItem => paymentItem !== bill)})
  }

  handleSubmit = (bill) => {
    fetch('http://localhost:3000/bills', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(bill)
    })
    .then(response =>  response.json())
    .then(newBill => {
      const newBillArray = [...this.state.bills, newBill]
      this.setState({ bills: newBillArray })
    })
  }

  handlePaid = (bill) => {
    // console.log("PAID??", bill)
    bill.paid = true
    // this.forceUpdate()
    this.setState({ bills: this.state.bills })
  }

  componentDidMount() {
    fetch('http://localhost:3000/bills')
      .then(response => response.json())
      .then(bills => this.setState({ bills }));

  }

  render() {
    console.log(this.state.payments)
    return (
      <div className="App">

        <NavBar />
        <div className="container">
     
        <BillList className="bills" bills={this.state.bills} addBill={this.addBill} handleSubmit={this.handleSubmit}/>
        {/* {console.log(this.state.bills)} */}
  
        <Payment className="payments" bills={this.state.payments} paidBill={this.paidBill} handlePaid={this.handlePaid}/>
        {/* {console.log(this.paidBill, 'function?')} */}
      </div>
        
      </div>
    );

  }
}

export default App;
