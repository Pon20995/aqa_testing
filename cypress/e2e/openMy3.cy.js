// eslint-disable-next-line import/no-named-as-default
import GaragePage from './pages/GaragePage';

describe('Tests for qauto', () => {
  const garagePage = new GaragePage();
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.Login();
  });

  it('Check Garage page is opend', () => {
    cy.get('.panel-page h1').should('have.text', 'Garage');
    cy.reload();
  });

  it('Adding a car', () => {
    cy.wait(1000);
    cy.get('a[routerLink = "garage"].-active').should('be.visible');
    garagePage.addCarButton().should('be.visible').click();
    cy.get('h4.modal-title').should('have.text', 'Add a car');
    cy.get('input#addCarMileage').click();
    cy.get('select#addCarBrand').select('BMW');
    cy.get('div.invalid-feedback')
      .should('be.visible')
      .contains('Mileage cost required');
    cy.get('input#addCarMileage').clear().type('30000');
    cy.get('.modal-footer .btn-primary').click();
  });

  it('Check the car data', () => {
    cy.get('button.btn-success')
      .first()
      .should('have.css', 'background-color', 'rgb(92, 184, 92)');
    cy.get('img.car-logo_img')
      .first()
      .should(
        'have.attr',
        'src',
        'https://qauto.forstudy.space/public/images/brands/bmw.png',
      );
    cy.get('.car-body input[name="miles"]').first().should('have.value', 30000);
  });

  it('Delete a car', () => {
    cy.get('span.icon-edit').click();
    cy.get('button.btn-outline-danger').click();
    cy.get('button.btn-danger').click();
    cy.get('p.panel-empty_message').should(
      'have.text',
      'You don’t have any cars in your garage',
    );
  });
});
