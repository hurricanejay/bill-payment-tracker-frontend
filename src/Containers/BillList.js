import React from "react";
import Bill from "../Components/Bill";
import AddNewBillForm from "../Components/AddNewBillForm";

class BillList extends React.Component {

  state = {
    formOpen: false
  }

  toggleForm = () => {
    this.setState({
      formOpen: !this.state.formOpen
    })
  }
  render() {
    // {console.log(this.props.bills, 'in the billlist container... YES')}
    console.log(this.props)
    return (

        <div className="col-8">
        <h2>List of Bills</h2>
        {this.props.bills.map(bill => (
          <Bill bill={bill} key={bill.id} clickHandler={this.props.addBill} isDefault = {true} />
        ))}
        <button onClick= {this.toggleForm}>{this.state.formOpen ? "Hide" : "Show"} New Bill Form</button>
        {this.state.formOpen && <AddNewBillForm addToBillList={this.addPoemToState} handleSubmit={this.props.handleSubmit}/>}
      </div>
    );
  }
}

export default BillList;
