# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Customer.create(name:"rick", username:"rickuser209", favFood: "tacos")




puts "starting seed"
#
User.create!(type:'Vendor', firstName: 'timmyVendor', lastName: 'timmyVendor', email: 'timmyVendor@timmyVendor.com', password: '123', foodType: 'tacos', companyName:'timmytaco')
User.create!(type:'Vendor', firstName: 'tobyVendor', lastName: 'tobyVendor', email: 'tobyVendor@tobyVendor.com', password: '123', foodType: 'tacos', companyName:'tobytaco')
User.create!(type:'Vendor', firstName: 'tomVendor', lastName: 'tomVendor', email: 'tomVendor@tomVendor.com', password: '123', foodType: 'tacos', companyName:'tomtaco')

# Customers
User.create!(type:'Customer', firstName: 'peteCust', lastName: 'peteCust', email: 'peteCust@peteCust.com', password: '123', favFood:'tacos')
User.create!(type:'Customer', firstName: 'paulCust', lastName: 'paulCust', email: 'paulCust@paulCust.com', password: '123', favFood:'tacos')
User.create!(type:'Customer', firstName: 'patCust', lastName: 'patCust', email: 'patCust@patCust.com', password: '123', favFood: 'burro')

puts "seed complete"