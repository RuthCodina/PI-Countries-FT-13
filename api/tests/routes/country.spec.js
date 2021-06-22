/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const { Router } = require('express');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "ATF",
  name: "French Southern Territories",
  bandera: "https://restcountries.eu/data/atf.svg",
  region: "Africa",
  capital: "Port-aux-Français",
  subregion: "Southern Africa",
  area: 7747,
  population: 140,

};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});



