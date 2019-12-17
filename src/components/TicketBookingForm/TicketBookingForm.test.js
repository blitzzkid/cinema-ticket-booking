import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TicketBookingForm from "./TicketBookingForm";

describe("The customer booking form", () => {
  it("should show the name input field", () => {
    const { getByText } = render(<TicketBookingForm />);
    expect(getByText("Name")).toBeInTheDocument();
  });

  it("should register text changes to the name input", () => {
    const { getByLabelText } = render(<TicketBookingForm />);
    const nameInput = getByLabelText("customer-name");

    fireEvent.change(nameInput, { target: { value: "John" } });

    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveValue("John");
  });

  it("should show the email input field", () => {
    const { getByText } = render(<TicketBookingForm />);
    expect(getByText("Email")).toBeInTheDocument();
  });

  it("should register text changes to the email input", () => {
    const { getByLabelText } = render(<TicketBookingForm />);
    const emailInput = getByLabelText("customer-email");

    fireEvent.change(emailInput, { target: { value: "john@gmail.com" } });

    expect(emailInput).toHaveAttribute("type", "text");
    expect(emailInput).toHaveValue("john@gmail.com");
  });
});
