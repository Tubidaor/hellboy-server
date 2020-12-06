const xss = require('xss')

const AddressServices = {
  postShippingAddress(db, address) {
    console.log(address)
    return db
      .insert(address)
      .into('hb_shipping_address')
      .returning('*')
      .then(([entry]) => entry)
      .then(entry =>
        AddressServices.getAddressById(db, 'hb_shipping_address', entry.address_id)
      )
  },

  postBillingAddress(db, address) {
    return db
      .insert(address)
      .into('hb_billing_address')
      .returning('*')
      .then(([entry]) => entry)
      .then(entry =>
        AddressServices.getAddressById(db, 'hb_billing_address', entry)
      )
  },

  getAddressById(db, table, address_id) {
    return db
      .from(table)
      .select('*')
      .where({address_id})
      .first()
  },

  serializeAddress(address) {
    return {
      address_id: address.address_id,
      address_line1: xss(address.address_line1),
      address_line2: xss(address.address_line2),
      city: xss(address.city),
      state: xss(address.state),
      zip: xss(address.zip)
    }
  }
}

module.exports = AddressServices