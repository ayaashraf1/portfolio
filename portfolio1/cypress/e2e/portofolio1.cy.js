/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable jest/expect-expect */
describe('Test portofolio e2e', () => {
    it('check page before timeout',()=>{
        cy.visit("/");
        cy.get("#loading-container").should("be.visible");
    });

    beforeEach(()=>{
        cy.visit("/");
        cy.timeout(1200);
    })
    it('check page after timeout', () => {
      cy.contains("Aya's portfolio").should("be.visible");
      cy.contains("Programming and Design For The Future").should("be.visible");
      cy.contains("Dig into my universe").should("be.visible");
      cy.contains("ABOUT").should("be.visible");
      cy.contains("WORK").should("be.visible");
      cy.contains("CONTACT").should("be.visible");
    });
    it('check links in first section', () => {
        cy.get("#welcome-section").should("be.visible");
        cy.get("a").contains("ABOUT").click();
        cy.get("#about-container").should("be.visible");
        cy.get("a").contains("WORK").click();
        cy.get("#work-section").should("be.visible");
        cy.get("a").contains("CONTACT").click();
        cy.get("#contact-container").should("be.visible");

        cy.get("#welcome-section a").contains("Dig into my universe").click();
        cy.get("#work-section").should("be.visible");
    });
    it('Test contact form', () => {
        cy.get("#welcome-section").should("be.visible");
        cy.get("a").contains("CONTACT").click();
        cy.get("#contact-container").should("be.visible");
        
        // test validation
        cy.get("#name").type("test").should("have.value","test");
        cy.get("button").contains("Hit Me Up").click();  
        cy.timeout('1000');
        cy.contains("Email is empty or invalid").should("be.visible");
        cy.get("#email").type("test").should("have.value","test");
        cy.get("button").contains("Hit Me Up").click();  
        cy.contains("Email is empty or invalid").should("not.be.exist");
        cy.get("#email").type("@t").should("have.value","test@t");
        cy.get("button").contains("Hit Me Up").click();  
        cy.contains("Email is empty or invalid").should("not.be.exist");
        cy.contains("Message is empty").should("be.visible");
        cy.get("#message").type("test message").should("have.value","test message");
        cy.contains("Message is empty").should("not.be.exist");
        // cy.get("button").contains("Hit Me Up").click();   

        // happy senario
        // cy.get("#name").type("test").should("have.value","test");
        // cy.get("#email").type("test@t.com").should("have.value","test@t.com");
        // cy.get("#message").type("test message").should("have.value","test message");
        // cy.get("button").contains("Hit Me Up").click();        
      });
  })