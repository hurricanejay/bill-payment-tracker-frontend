import React from 'react';
import './App.css';
import BillList from './Containers/BillList';
import Payment from './Containers/Payment';
import NavBar from './Containers/NavBar';

class App extends React.Component {

  state = { bills: [], payments: []}

  addBill = (bill) => {
    this.setState({ payments: [...this.state.payments, bill]})
  }

  paidBill = (bill) => {
    this.setState({ payments: this.state.payments.filter(paymentItem => paymentItem !== bill)})
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
        <BillList bills={this.state.bills} addBill={this.addBill}/>
        {/* {console.log(this.state.bills)} */}
        <Payment bills={this.state.payments} paidBill={this.paidBill}/>
        {/* {console.log(this.paidBill, 'function?')} */}

        
      </div>
    );

  }
}

export default App;
