import React from "react";

class Bill extends React.Component {
  render() {
    //   console.log(this.props.bill, 'props in bill container')
    return (
      <div className="card"
      onClick={() => this.props.clickHandler(this.props.bill)}>

        <div className="card-body">
          <h2 className="card-company-name">{this.props.bill.company_name}</h2>
          <h4 className="card-amount">Amount Due:</h4><p>${this.props.bill.amount}</p>
          <h4 className="card-amount">Payment Due Date: </h4><p>{this.props.bill.payment_due}</p>
          <h4 className="card-category">Category: </h4><p>{this.props.bill.category}</p>
        </div>
      </div>
    );
  }
}

export default Bill;

