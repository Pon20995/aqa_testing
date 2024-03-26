export default class GaragePage {
  // eslint-disable-next-line class-methods-use-this
  addCarButton() {
    return cy.get('.panel-page button.btn-primary');
  }
}
