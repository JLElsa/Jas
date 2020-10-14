/// <reference types="cypress" />
describe("Test iframe embedding", () => {
  context("Window", () => {
    beforeEach(() => {
      cy.visit(
        "https://htmlpreview.github.io/?https://github.com/JLElsa/Jas/blob/master/Bubble-Milk-Tea-Lover-Web/home.html"
      );
    });

    it("Check document object character code", () => {
      cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });

    it("Check title", () => {
      cy.title().should("include", "Home");
    });

    it("Check youtube embedding", () => {
      cy.get("iframe").should("have.class", "youtube");
      cy.xpath("//*[@class='youtube']").then(($ele) => {
        var ifele = $ele.contents().find(".ytp-large-play-button");
        ifele.click();
        // prompt($ele);
        // cy.wrap(ifele).click();
      });
    });
  });
});
