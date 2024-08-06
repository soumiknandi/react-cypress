describe('Open login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('Checks if all elements exists', () => {

    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
    cy.get('#btnLogin').should('exist').contains('Login')
    cy.get('#btnRegister').should('exist').contains('Register')

  })

  it('Checks if user submits an empty form', (done) => {

    cy.get('#btnLogin').click().then(() => {
      cy.contains('Email is required')
      cy.contains('Password is required')
    }).then(() => done())

  })


  it('Checks if user submits malformatted email', (done) => {

    cy.get('#email').type("notanemail")
    cy.get('#btnLogin').click().then(() => {
      cy.contains('email must be a valid email')
    }).then(() => done())

  })


  it('Checks valid login', (done) => {

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Logged In')
      done()
    })
    cy.get('#email').type("mail@test.com")
    cy.get('#password').type("password")
    cy.get('#btnLogin').click()
  })


  it('Checks invalid login', (done) => {

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Invalid User')
      done()
    })

    cy.get('#email').type("invalidmail@test.com")
    cy.get('#password').type("password")
    cy.get('#btnLogin').click()
  })


  it('Checks register button', (done) => {

    let url = '';
    cy.on('url:changed', (newUrl) => {
      url = newUrl;
    })

    cy.get('#btnRegister').click().then(() => {
      expect(url).to.contain('Register')
    }).then(() => done())

  })

})



