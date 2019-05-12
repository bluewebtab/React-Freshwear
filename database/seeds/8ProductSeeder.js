'use strict'
const Database = use('Database')


/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run () {
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("LBN3465WHITE", "Lebron 15", "fill description", "/img/products/nike-lebron-15-white.png", "White", 300, 100, "leather", 1, 1, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("AIRMX45346GRN", "OG", "fill description", "/img/products/nike-airmax95-og-green.png", "Green", 400, 100, "leather", 1, 2, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("JRDN98098RD", "Retro High OG", "fill description", "/img/products/jordan-1-retrohighog-red.png", "Red", 200, 100, "leather", 5, 13, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("JRDN377745BLE", "Retro Low BG", "fill description", "/img/products/jordan-11-retrolowbg-babyblue.png", "Blue", 250, 100, "leather", 5, 15, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("YZY83428GRY", "Boost 700", "fill description", "/img/products/adidas-yeezy700-grey.png", "Grey", 550, 100, "leather", 2, 4, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    try{
      const lebrons = await Database.raw(`
        INSERT INTO freshwear.products (sku, title, description, image_url, color, price, qty, material, brand_id, type_id, user_id)
        Values("WLMS45923GLD", "Hu Holi NMD", "fill description", "/img/products/adidas-williams-huholi-gold.png", "Gold", 650, 100, "leather", 2, 5, 5)
        `);
      
    }catch(error){
      console.log(error)
    }
    console.log('Added Products to Products Table')
  }
}

module.exports = ProductSeeder
