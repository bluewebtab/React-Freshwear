'use strict'
const Database = use('Database')

/*
|--------------------------------------------------------------------------
| AddressSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AddressSeeder {
  async run () {
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        Values("4 main st", "apt 2", "miami", "fl", "USA", "34567", "shipping", 1)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        Values("358 bleeker st", "apt 2", "miami", "fl", "USA", "34567", "billing", 1)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        Values("328 grand ave", "apt 4g", "brookyln", "ny", "USA", "11745", "shipping", 2)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id) 
        Values("358 billy st", "", "flushing", "ny", "USA", "1125", "billing", 2)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        Values("358 gerome ave", "", "bronx", "ny", "USA", "1990", "shipping", 3)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const customer = await Database.raw(`
        INSERT INTO freshwear.addresses (address, address_2, city, state, country, zipcode, address_type, user_id)
        Values("389 gerold ave", "", "miami", "fl", "USA", "3498", "billing", 3)
        `);
      
    }catch(error){
      console.log(error)
    }
   console.log('Added addresses to customers')
  }
}

module.exports = AddressSeeder
