describe("A new user visits the booking page to book a seat", () => {
  before(() => {
    cy.visit(`${baseUrl}`);
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "C1",
      status: "available",
      capacity: 1
    });
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "C2",
      status: "available",
      capacity: 1
    });
    cy.request("POST", `${Cypress.env("backendUrl")}/seats/new`, {
      seatNumber: "C3",
      status: "available",
      capacity: 1
    });
  });

  const baseUrl = Cypress.env("baseUrl");

  it("Should visit the page and book a seat", () => {
    cy.visit(`${baseUrl}`);
    cy.contains("Purchase your Seat");
  });
});
