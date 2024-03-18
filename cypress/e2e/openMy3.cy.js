describe('Some test', () => {
  it('Open main page', () => {
    cy.visit('https://qauto.forstudy.space/panel/garage');
    cy.setCookie(
      'sid',
      's%3Abcx3aC3Ug-5y4A6394_c5at3x-Zndc33.%2FJX1k6yntLfVmnP4lfNUlFS7sp2srTomq8rYo6trvio',
    );
  });
});
