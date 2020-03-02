import React from "react";

class Bill extends React.Component {
  state = {
    paid: false
  };

  togglePaid = () => {
    this.setState({ paid: !this.state.paid });
  };
  // console.log(this.props.bill, 'props in bill container')

  render() {
    return (
      <div
        className="card"
        onClick={() => this.props.clickHandler(this.props.bill)}
      >
        <div className="card-body">
          <h2 className="card-company-name">{this.props.bill.company_name}</h2>
          <h4 className="card-amount">Amount Due:</h4>
          <p>${this.props.bill.amount}</p>
          <h4 className="card-amount">Payment Due Date: </h4>
          <p>{this.props.bill.payment_due}</p>
          <h4 className="card-category">Category: </h4>
          <p>{this.props.bill.category}</p>
          {this.props.isDefault ? null : (
            <button onClick={() => this.props.handlePaid(this.props.bill)}>
              {this.props.bill.paid ? "Paid" : "Pay This Week"}
            </button>
          )}
          <hr />
        </div>
      </div>
    );
  }
}

export default Bill;
