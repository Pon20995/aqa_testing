import GaragePage from './pages/GaragePage';
import { mileage } from '../fixtures/mileage';

describe('Tests for qauto', () => {
  const garagePage = new GaragePage();
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.Login();
  });

  it('Check success msg in modal', () => {
    cy.get('div.alert-success p').contains(
      'You have been successfully logged in',
    );
  });

  it('Check Garage page is opend', () => {
    cy.get('.panel-page h1').should('have.text', 'Garage');
    cy.reload();
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const { id, mileageVal } of mileage) {
    it(`${id} creating car with mileage`, () => {
      garagePage.addCarButton().should('be.visible').click();
      cy.get('input#addCarMileage').clear().type(`${mileageVal}`);
      cy.get('.modal-footer .btn-primary').click();
      cy.get('div.alert-success p'); // msg for successfully added car
    });
  }
});
