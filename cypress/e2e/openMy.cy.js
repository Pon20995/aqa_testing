describe('template spec', () => {
  // before(() => {
  //   // happens only once
  // });
  beforeEach(() => {
    cy.visit('https://www.guru99.com/');
  });

  it('check text', () => {
    cy.get('h1.thick-heading').should('have.text', 'Tutorials Library');
  });

  it('click software testing link', () => {
    cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a')
      .should('be.visible')
      .click();
    cy.get(
      ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
      { timeout: 3000 },
    )
      .should('be.visible')
      .click();
  });
});
