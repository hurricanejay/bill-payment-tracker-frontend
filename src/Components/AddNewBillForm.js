import React, { Component } from 'react';


class AddNewBillForm extends Component {

  state = {
    company_name: "",
    amount: "",
    payment_due: "",
    category: "",
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    // this.setState({[event.target.name]: event.target.value})
   this.props.handleSubmit(this.state)
  }
  
    

  render() {
      return (
          <div className="upload-form">
              <form onSubmit={this.handleSubmit}>
                  <h3>Add New Bill</h3>
                  <input name="company_name" placeholder="Company Name" onChange={this.handleChange} value={this.state.company_name} />
                  <input name="amount" placeholder="Payment Amount" onChange={this.handleChange} value={this.state.payment_amount}/>
                  <input name="category" placeholder="Category" onChange={this.handleChange} value={this.state.category}/>
                  <input name="payment_due" placeholder="Payment Due Date" onChange={this.handleChange} value={this.state.payment_due_date}/>
                  <button type="submit">Submit</button>
              </form>

          </div>
      )
  }
}


export default AddNewBillForm;