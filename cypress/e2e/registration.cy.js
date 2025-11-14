describe("Registration Form Test", () => {

  it("should submit the form successfully", () => {

    cy.visit("http://127.0.0.1:5500/registration.html");

    cy.get("#firstName").type("Anuj Pratap");
    cy.get("#lastName").type("Singh");
    cy.get("#email").type("apsrajput183@gmail.com");
    cy.get("#phone").type("+918955469061");
    cy.get("#age").type("22");

    cy.contains("label", "Male").click({ force: true });


    cy.get("#address").type("Alwar, Rajasthan");

    cy.get("#country").select("India");
    cy.get("#state").select("Rajasthan");
    cy.get("#city").select("Alwar");

    cy.get("#password").type("StrongPass123!");
    cy.get("#confirmPassword").type("StrongPass123!");

    cy.contains("label", "Terms").click({ force: true });


    cy.get("#submitBtn").click();

    cy.get("#success")
  .should("be.visible")
  .and("contain", "Registration Successful");

  });

});
