/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

// Import commands.js using ES2015 syntax:

import './commands'
import addContext from 'mochawesome/addContext';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const parentName = getParentName(runnable);
    const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${parentName} -- ${
      test.title
    } (failed).png`;
    addContext({ test }, screenshot);
    addContext({ test }, `${Cypress.config('videosFolder')}/${Cypress.spec.name}.mp4`);
  }
});

function getParentName(runnable, titles = []) {
  if (runnable.parent.title) {
    titles.push(runnable.parent.title);
    return getParentName(runnable.parent, titles);
  } else {
    return titles.reverse().join(' -- ');
  }
}