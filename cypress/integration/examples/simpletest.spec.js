describe("Sample Test", () => {
  it("Visits thinkify website", () => {
    cy.visit("https://www.thinkify.io");
    cy.url().should("eq", "https://www.thinkify.io");
  });
});
