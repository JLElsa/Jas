// Arrange - setup initial app state
// - visit a web page
// - query for an element
// Act - take an action
// - interact with that element
// Assert - make an assertion
// - make an assertion about page content
describe("Click Button for Navigation", () => {
  it("Visit the site", () => {
    cy.visit("http://localhost:8000/Downloads/Lil_Programs/slideing.html");
  });

  it("Click button 1", () => {
    cy.get("#section1").find("a").click({ force: true });
    cy.pause();
  });

  it("Click button 2", () => {
    cy.get("#section2").find("a").click({ force: true });
    cy.pause();
  });
});

describe("Fill Input For Form", () => {

  it("Fill Email and Password", () => {
    cy.get(".form-control[name=email]").type("testing@gmail.com");
    cy.get(".form-control[name=pwd]").type("abc123");
  });

  it("Fill Checkbox", () => {
    cy.get('input[type="checkbox"]')
      .not("[disabled]")
      .check()
      .should("be.checked");
    cy.pause();
  });

  it("Hover Submit Button", () => {
    cy.get('button[type="submit"]').trigger('mouseover');
    cy.pause();
  });

  it("Submit the form", () => {
    cy.get('button[type="submit"]').click();
  });
});
