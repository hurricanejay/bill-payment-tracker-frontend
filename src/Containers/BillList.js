import React from "react";
import Bill from "../Components/Bill";
import Form from "../Components/Form";

class BillList extends React.Component {
  render() {
    // {console.log(this.props.bills, 'in the billlist container... YES')}
    return (
      <div className="row">
        <div className="col-8"></div>

        {this.props.bills.map(bill => (
          <Bill bill={bill} key={bill.id} clickHandler={this.props.addBill} />
        ))}

        <Form />
      </div>
    );
  }
}

export default BillList;
