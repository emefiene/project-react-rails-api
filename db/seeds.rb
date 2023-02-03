# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p1 = Owner.create(
    description: "Mike",
    image: "https://m.media-amazon.com/images/I/8116YNSP6pL._AC_SL1500_.jpg",
    price: 20,
    rating: 4,
    quantity: 20

)

p2 = Owner.create(
    description: "Mike",
    image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp",
    price: 20,
    rating: 4,
    quantity: 20

)

u1 = User.create(name: 'Pius', email: 'email@gmail.com', password: '1234')
u2 = User.create(name: 'Pius2', email: 'p2email@gmail.com', password: '1234')
u3 = User.create(name: 'Pius3', email: 'p3email@gmail.com', password: '1234')

Review.create(user:u1, owner:p1, comments: "Good product", time: Time.now)
Review.create(user:u2, owner:p2, comments: "Never coming back", time: Time.now)
Review.create(user:u3, owner:p1, comments: "Fantastic product...wow", time: Time.now)