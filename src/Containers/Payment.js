import React from "react";
import Bill from "../Components/Bill";

class Payment extends React.Component {
  render() {
    //   {console.log(this.props.paidBill, 'in the payment container, it should be empty now')}
    return (
      <div className="col-4">
          <h2>Payments Made</h2>
        {this.props.bills.map(bill => (
          <Bill bill={bill} key={bill.id} clickHandler={() => {}} buttonClicked={this.props.paidBill} handlePaid={this.props.handlePaid}/>
        ))}
      </div>
    );
  }
}

export default Payment;
