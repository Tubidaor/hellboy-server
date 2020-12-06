const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe.only('Tests for shpping and billing address', () => {

  let db
  const { shippingAddress, testUsers } = helpers.retrieveData()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())
  before('clean tables', () => helpers.cleanTables(db))

  context('Tests for Shipping Address', () => {
    beforeEach('load data into shipping', () => {
      helpers.seedUsers(db, testUsers)
      // helpers.seedAddress(db, 'hb_shipping_address', shippingAddress)
    })

    afterEach('clean tables', () => helpers.cleanTables(db))

    const requiredFields = [
      'address_line1',
      'address_line2',
      'city',
      'state',
      'zip',
    ]

    requiredFields.forEach(field => {
      const shipAddressBody = {
        address_line1: shippingAddress[0].address_line1,
        address_line2: shippingAddress[0].address_line2,
        city: shippingAddress[0].city,
        state: shippingAddress[0].state,
        zip: shippingAddress[0].zip,
      }

      it(`1-5 Responds with error if ${field} is not in request body`, () => {
        delete shipAddressBody[field]

        return supertest(app)
          .post('/api/shipping_address')
          .send(shipAddressBody)
          .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
          .expect(400, { error: `Missing ${field} in request body`})
      })


    })

    it('6 Responds with 201 and address when shipping address is posted', () => {

      return supertest(app)
        .post('/api/shipping_address')
        .send(shippingAddress[0])
        .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
        .expect(res => {
          const row = res.body
          expect(row).to.have.property('address_line1')
          expect(row).to.have.property('address_line2')
          expect(row).to.have.property('city')
          expect(row).to.have.property('state')
          expect(row).to.have.property('zip')
        })
    })
  })
  
  context('Tests for billing Address', () => {
    beforeEach('load data into shipping', () => {
      helpers.seedUsers(db, testUsers)
      // helpers.seedAddress(db, 'hb_shipping_address', shippingAddress)
    })

    afterEach('clean tables', () => helpers.cleanTables(db))

    const requiredFields = [
      'address_line1',
      'address_line2',
      'city',
      'state',
      'zip',
    ]

    requiredFields.forEach(field => {
      const billAddressBody = {
        address_line1: shippingAddress[0].address_line1,
        address_line2: shippingAddress[0].address_line2,
        city: shippingAddress[0].city,
        state: shippingAddress[0].state,
        zip: shippingAddress[0].zip,
      }

      it(`1-5 Responds with error if ${field} is not in request body`, () => {
        delete billAddressBody[field]

        return supertest(app)
          .post('/api/shipping_address')
          .send(billAddressBody)
          .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
          .expect(400, { error: `Missing ${field} in request body`})
      })


    })

    it('6 Responds with 201 and address when shipping address is posted', () => {

      return supertest(app)
        .post('/api/shipping_address')
        .send(shippingAddress[0])
        .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
        .expect(res => {
          const row = res.body
          expect(row).to.have.property('address_line1')
          expect(row).to.have.property('address_line2')
          expect(row).to.have.property('city')
          expect(row).to.have.property('state')
          expect(row).to.have.property('zip')
        })
    })
  })
})