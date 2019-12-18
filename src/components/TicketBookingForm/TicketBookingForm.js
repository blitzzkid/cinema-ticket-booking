import React from "react";
// import emailjs from "emailjs-com";
import { createNewBooking, purchaseSeat } from "../../api/api";
class TicketBookingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      customerName: "",
      customerEmail: "",
      success: false,
      message: "",
      submitted: false
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = async event => {
    try {
      event.preventDefault();
      if (this.props.selectedSeatsId.length === 0) {
        throw new Error("No seat was selected");
      }
      this.props.selectedSeatsId.forEach(seatId => purchaseSeat(seatId));
      // emailjs
      //   .sendForm(
      //     process.env.REACT_APP_EMAIL_SERVICE_ID,
      //     process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      //     event.target,
      //     process.env.REACT_APP_EMAIL_USER_ID
      //   )
      //   .then(
      //     result => {
      //       console.log(result.text);
      //     },
      //     error => {
      //       console.log(error.text);
      //     }
      //   );
      const data = {
        customerName: this.state.customerName,
        customerEmail: this.state.customerEmail
      };
      await createNewBooking(data);
      this.setState({
        customerName: "",
        customerEmail: "",
        success: true,
        message: "Successfully made booking",
        submitted: true
      });
    } catch (err) {
      if (err.message === "No seat was selected") {
        this.setState({
          success: false,
          message: "No seat was selected",
          submitted: true
        });
      } else {
        this.setState({
          success: false,
          message: "Unable to make the booking",
          submitted: true
        });
      }
    }
  };

  render() {
    return (
      <form className="bookingForm" onSubmit={this.onFormSubmit}>
        <div className="bookingForm__div">
          <h1 className="bookingForm__heading">Book your Seat</h1>
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
          <input
            className="bookingForm__bookButton"
            value="Book"
            type="submit"
          />
          {this.state.submitted ? <p>{this.state.message}</p> : ""}
        </div>
      </form>
    );
  }
}

export default TicketBookingForm;
