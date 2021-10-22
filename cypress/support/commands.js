const authState = require('./auth-state.json')

Cypress.Commands.add('apiLogin', (username, password) => {
  const type = 'LOGIN';
  cy.request({
    method: 'POST',
    url: `${Cypress.env('requestBaseUrl')}/login`,
    body: { username, password, type }
  }).then((response) => {
    authState.context.user = response.body.user
    authState._event.data.data.user = response.body.user
    authState.event.data.user = response.body.user
    window.localStorage.setItem('authState', JSON.stringify(authState))
  })
})