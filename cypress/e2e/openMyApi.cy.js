import GaragePage from './pages/GaragePage';
import { mileage } from '../fixtures/mileage';

describe('API tests for qauto', () => {
  const garagePage = new GaragePage();
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.Login();
  });

  it('Inercept usage', () => {
    cy.intercept('GET', '/api/cars').as('getCars');
    cy.get('[routerlink = "expenses"]').click();
    cy.get('@getCars').its('response.statusCode').should('eq', 200);
    // cy.get('@getCars').then((data)=>{});
  });

  it('Inercept change response to 404', () => {
    cy.intercept('GET', '/api/cars', { statusCode: 404, body: 'No cars' });
    cy.get('[routerlink = "expenses"]').click();
  });

  it('Inercept with fixtures usage', () => {
    cy.intercept('GET', '/api/cars', {
      statusCode: 200,
      fixture: 'example.json',
    });
    cy.get('[routerlink = "expenses"]').click();
  });

  it('Request usage', () => {
    cy.wait(1000);
    cy.getCookie('sid').then((cookie) => {
      const cookieValue = cookie.value;

      cy.request({
        method: 'POST',
        url: '/api/cars',
        body: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 2024,
        },
        headers: {
          Cookie: `sid=${cookieValue}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(201);
        // expect(response.body)
        //   .to.have.property('data')
        //   .and.to.have.property('id', 120632);
        cy.writeFile('cypress/fixtures/response.json', response.body);
      });
    });
  });
});
