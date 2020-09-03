describe("Example Test", () => {
  it("Visits Thinkify website", () => {
    cy.visit("https://www.thinkify.io");
    cy.url().should("eq", "https://www.thinify.io");
  });
});
