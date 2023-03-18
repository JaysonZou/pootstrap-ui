import { Breadcrumb } from ".";

describe("Breadcrumb", () => {
  const path = ["2", "3", "4"];
  it("should", () => {
    cy.mount(<Breadcrumb data={path} />);
    cy.get(".breadcrumb-item").should("have.length", 3);
  });
});
