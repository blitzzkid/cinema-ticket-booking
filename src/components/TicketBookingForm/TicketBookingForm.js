import React from "react";

class TicketBookingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      customerName: "",
      customerEmail: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <label>
          Name
          <input
            className="input__text"
            type="text"
            aria-label="customer-name"
            name="customerName"
            value={this.state.customerName}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Email
          <input
            className="input__text"
            type="text"
            aria-label="customer-email"
            name="customerEmail"
            value={this.state.customerEmail}
            onChange={this.handleInputChange}
          ></input>
        </label>
      </div>
    );
  }
}

export default TicketBookingForm;
