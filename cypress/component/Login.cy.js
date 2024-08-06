import Login from '../../src/screen/Login.js'

describe('Login.cy.js', () => {
  it('playground', () => {
    cy.mount(<Login />)

    cy.get('#email').invoke('attr', 'placeholder').should('contain', 'Enter email')
    cy.get('label').contains('Email address')

    cy.get('#password').invoke('attr', 'placeholder').should('contain', 'Password')
    cy.get('label').contains('Password')

    cy.get('#btnLogin').should('have.text', 'Login')
    cy.get('#btnRegister').should('have.text', 'Register')

  })
})