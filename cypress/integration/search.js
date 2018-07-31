describe('for search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should search for artist', () => {
    cy.get('input').type('Metallica');

    cy.wait(200);

    cy.get('h2').contains('Metallica');
  });
});
