describe("A new user visits the booking page to book a seat", () => {
  before(() => {
    cy.visit(`${baseUrl}`);
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "B1",
      status: "available",
      capacity: 1
    });
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "B2",
      status: "reserved",
      capacity: 1
    });
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "B3",
      status: "sold",
      capacity: 1
    });
  });

  const baseUrl = Cypress.env("baseUrl");

  it("Should attempt to book without selecting a seat", () => {
    cy.visit(`${baseUrl}`);
    cy.contains("Screen");
    cy.get("button")
      .contains("Book seats")
      .click();
    cy.contains("Please select seats to reserve for purchase");
  });

  it("Should attempt to book a reserved seat", () => {
    cy.visit(`${baseUrl}`);
    cy.get("p")
      .contains("B2")
      .click();
    cy.contains("This seat has been reserved");
  });

  it("Should attempt to book a sold seat", () => {
    cy.visit(`${baseUrl}`);
    cy.get("p")
      .contains("B3")
      .click();
    cy.contains("This seat has already been sold");
  });

  it("Should select an available seat but decide to reselect seats after going to booking page", () => {
    cy.visit(`${baseUrl}`);
    cy.get("p")
      .contains("B1")
      .click();
    cy.contains(
      "You have reserved the selected seat(s), please make a booking"
    );
    cy.get("button")
      .contains("Book seats")
      .click();
    cy.contains("Purchase your Seat");
    cy.get("input[name=customerName]").type("Tom");
    cy.get("input[name=customerEmail]").type("Tom@gmail.com");
    cy.get("button")
      .contains("Reselect seats")
      .click();
    cy.contains("Screen");
  });

  it("Should select an available seat and book it", () => {
    cy.visit(`${baseUrl}`);
    cy.get("p")
      .contains("B1")
      .click();
    cy.contains(
      "You have reserved the selected seat(s), please make a booking"
    );
    cy.get("button")
      .contains("Book seats")
      .click();
    cy.contains("Purchase your Seat");
    cy.get("input[name=customerName]").type("Tom");
    cy.get("input[name=customerEmail]").type("Tom@gmail.com");
    cy.get("input[type=submit]").click();
    cy.contains("Successfully made booking");
  });
});
