describe("Home header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the correct title", () => {
    cy.get("header h1")
      .invoke("text")
      .should("match", /The Defsafe cat facts page/);
  });
});
