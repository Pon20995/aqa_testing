describe('Guru tests advanced', () => {
  //   cy.get('body').then(($body) => {
  //     if ($body.find('selector_for_your_button').length > 0) {
  //       //evaluates as true if button exists at all
  //       cy.get("selector_for_your_button']").then(($header) => {
  //         if ($header.is(':visible')) {
  //           //you get here only if button EXISTS and is VISIBLE
  //         } else {
  //           //you get here only if button EXISTS but is INVISIBLE
  //         }
  //       });
  //     } else {
  //       //you get here if the button DOESN'T EXIST
  //       assert.isOk('everything', 'everything is OK');
  //     }
});
// before(() => {
//   cy.visit('https://www.guru99.com/');
//   cy.get('body').then(($body) => {
//     if (
//       $body.find('#sp_message_iframe_1091096').then(($modalEL) => {
//         Cypress.dom.isVisible($modalEL);
//       })
//     ) {
//       cy.get('button[aria-label="Accept').click();
//     } else {
//       console.log('Modal is not visible');
//     }
//   });
// });

//   before(() => {
//     cy.visit('https://www.guru99.com/');
//     cy.get('a[data-lasso-id="147432"]').click();

//     cy.get('#sp_message_iframe_1091096')
//       .eq(0)
//       .should('be.visible')
//       .then(($iframe) => {
//         const $body = $iframe.contents().find('body');
//         cy.wrap($body).find('button[aria-label="Accept"]').click();
//       });
//   });

beforeEach(() => {
  cy.viewport(1440, 900);
  cy.visit('https://www.guru99.com');
});
it('Open website', () => {
  cy.get('.thick-heading').should('have.text', 'Tutorials Library');
});

it('Click the software testing link', () => {
  // cy.visit('www.guru99.com');
  cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a')
    .should('be.visible')
    .click();
  cy.get(
    ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
    { timeout: 3000 },
  ).should('be.visible');
  cy.get(
    ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
  ).click();
});

it('Select unique elements', () => {
  cy.get('ul.menu1').eq(5).find('a[title="SAP Basis"]');
  cy.contains('SAP Bas').should('be.visible');
  cy.contains('a', 'SAP Basis');
  cy.get('a').contains('SAP Basis');
  // search in header
  cy.get('#main-header #primary-menu').children();
});

it('Typing data into search field', () => {
  cy.wait(3000);
  cy.get('input[name=search]', { timeout: 6000 })
    .should('be.visible')
    .type('SAP Basis{enter}');
});

it('Typing data into search field with allias', () => {
  cy.wait(3000);
  cy.get('input[name=search]').as('inputSearch');
  cy.get('@inputSearch').should('be.visible').type('SAP Basis{enter}');
});

it('Click search icon on main page', () => {
  cy.wait(3000);
  // cy.get('@inputSearch').should('be.visible');
  cy.get('span.search-toggle-icon').click();
  cy.get('input[type="search"]')
    .should('be.visible')
    .clear()
    .type('SAP Basis{enter}');
  cy.url().should('include', '/search_gcse?q=SAP+Basis');
});

it('Check SAP elements', () => {
  // cy.get('ul.menu1').eq(5).filter('SAP').should('have.length', 12);
  cy.get('ul.menu1')
    .eq(5)
    .each(($item) => {
      cy.wrap($item).find('a').should('be.visible').contains('SAP');
    });
  cy.get('ul.menu1 li a')
    .filter(':contains("SAP MM")')
    .should('have.length', 1);
});
