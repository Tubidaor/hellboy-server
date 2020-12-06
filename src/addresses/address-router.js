const express = require('express')
const addressRouter = express.Router()
const jsonBodyParser = express.json()
const AddressServices = require('./address-services')
const { v4: uuidv4 } = require('uuid')
const { requireAuth } = require('../middleware/jwt-auth')

addressRouter
  .route('/shipping_address')
  .all(requireAuth)
  .post(jsonBodyParser, (req, res, next) => {
    const { user_id } = req.user
    const { address_line1, address_line2, city, state, zip } = req.body
    const requiredFields = [
      'address_line1',
      'address_line2',
      'city',
      'state',
      'zip'
    ]

    for(const field of requiredFields)
      if(!req.body[field]) {
        return res.status(400).json({error: `Missing ${field} in request body`})
      }
    
    const id = uuidv4()
    const shippingAddress = {
      address_id: id,
      address_line1,
      address_line2,
      city,
      state,
      zip,
      user_id
    }

    AddressServices.postShippingAddress(req.app.get('db'), shippingAddress)
      .then(address => {
        res
          .status(201)
          .json(AddressServices.serializeAddress(address))
      })
      .catch(next)
    }
  )

  addressRouter
  .route('/billing_address')
  .all(requireAuth)
  .post(jsonBodyParser, (req, res, next) => {
    const { user_id } = req.user
    const { address_line1, address_line2, city, state, zip } = req.body
    const requiredFields = [
      'address_line1',
      'address_line2',
      'city',
      'state',
      'zip'
    ]

    for(const field of requiredFields)
      if(!req.body[field]) {
        return res.status(400).json({error: `Missing ${field} in request body`})
      }
    
    const id = uuidv4()
    const billingAddress = {
      address_id: id,
      address_line1,
      address_line2,
      city,
      state,
      zip,
      user_id
    }
    
    AddressServices.postBillingAddress(req.app.get('db'), billingAddress)
      .then(address => {
        res
          .status(201)
          .json(AddressServices.serializeAddress(address))
      })
      .catch(next)
    }
  )

module.exports = addressRouter