import { Alert } from ".";

describe("Alert", () => {
  it("should alert render", () => {
    const content = "watch out for changes";
    cy.mount(<Alert>{content}</Alert>);
  });
});
