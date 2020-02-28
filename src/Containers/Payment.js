import React from "react";
import Bill from "../Components/Bill";

class Payment extends React.Component {
  render() {
    //   {console.log(this.props.paidBill, 'in the payment container, it should be empty now')}
    return (
      <div className="Payment">
          <h3>Payments Made</h3>
        {this.props.bills.map(bill => (
          <Bill bill={bill} key={bill.id} clickHandler={this.props.paidBill}/>
        ))}
      </div>
    );
  }
}

export default Payment;
