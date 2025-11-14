describe("Registration Form Automation", () => {
  it("Fills and submits the form", () => {
    cy.visit("registration.html"); // your file name

    cy.get("#firstName").type("Anuj");
    cy.get("#lastName").type("Singh");
    cy.get("#email").type("anuj@example.com");
    cy.get("#phone").type("9876543210");
    cy.get("#age").type("22");
    cy.get("input[value='Male']").check();
    cy.get("#address").type("Alwar, Rajasthan");
    cy.get("#country").select("India");
    cy.get("#state").select("Rajasthan");
    cy.get("#city").select("Alwar");
    cy.get("#password").type("StrongPass@123");
    cy.get("#confirmPassword").type("StrongPass@123");

    cy.get("#terms").check();

    cy.get("#submitBtn").click();

    cy.contains("Registration Successful!").should("be.visible");
  });
});
