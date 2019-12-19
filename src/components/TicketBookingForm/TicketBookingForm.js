import React from "react";
// import emailjs from "emailjs-com";
import { createNewBooking, purchaseSeat, releaseSeat } from "../../api/api";
import PropTypes from "prop-types";
import "./TicketBookingForm.css";
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
      this.setState({
        success: false,
        message: "Unable to make the booking",
        submitted: true
      });
    }
  };

  onReselectSeats = () => {
    this.props.selectedSeatsId.forEach(seatId => releaseSeat(seatId));
    this.props.handleReselectSeats();
  };

  render() {
    return (
      <div>
        <form className="bookingForm" onSubmit={this.onFormSubmit}>
          <div className="bookingForm__div">
            <h1 className="bookingForm__heading">Purchase your Seat</h1>
            <section className="input">
              <label className="input__label">Name</label>
              <input
                className="input__text"
                type="text"
                aria-label="customer-name"
                name="customerName"
                value={this.state.customerName}
                onChange={this.handleInputChange}
              ></input>
            </section>
            <section className="input">
              <label className="input__label">Email</label>
              <input
                className="input__text"
                type="text"
                aria-label="customer-email"
                name="customerEmail"
                value={this.state.customerEmail}
                onChange={this.handleInputChange}
              ></input>
            </section>
            <div className="bookingForm__buttons">
              <input
                className="bookingForm__bookButton"
                value="Book"
                type="submit"
              />
              <button
                className="bookingForm__reselectButton"
                type="button"
                onClick={this.onReselectSeats}
              >
                Reselect seats
              </button>
            </div>
            <div className="bookingForm__message">
              {this.state.submitted ? <p>{this.state.message}</p> : ""}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

TicketBookingForm.propTypes = {
  selectedSeatsId: PropTypes.array,
  handleReselectSeats: PropTypes.func
};

export default TicketBookingForm;
