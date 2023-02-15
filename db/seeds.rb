# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
m1 = Member.create( name: "John", email: "john@gmail.com", password: "1234")
m2 = Member.create( name: "Mary", email: "mary@gmail.com", password: "1234")
m3 = Member.create( name: "Look", email: "look@gmail.com", password: "1234")
m4 = Member.create( name: "Cook", email: "cook@gmail.com", password: "1234")
p1 = Production.create(
    description: "Must buy wears",
    image: "https://m.media-amazon.com/images/I/8116YNSP6pL._AC_SL1500_.jpg",
    price: 20,
    rating: 4,
    quantity: 20,
    member:m1

)

p2 = Production.create(
    description: "Wear me.com",
    image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp",
    price: 20,
    rating: 4,
    quantity: 20,
    member:m1

)

p3 = Production.create(
    description: "Expensive goodies",
    image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp",
    price: 20,
    rating: 4,
    quantity: 20,
    member:m2

)
p4 = Production.create(
    description: "Luxusery wears",
    image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp",
    price: 20,
    rating: 4,
    quantity: 20,
    member:m3

)
p5 = Production.create(
    description: "Welcom to spicy wear",
    image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp",
    price: 20,
    rating: 4,
    quantity: 20,
    member:m4

)
# m1 = Member.create( name: "John", email: "john@gmail.com", password: "1234")
# m2 = Member.create( name: "Mary", email: "mary@gmail.com", password: "1234")
# m3 = Member.create( name: "Look", email: "look@gmail.com", password: "1234")
# m4 = Member.create( name: "Cook", email: "cook@gmail.com", password: "1234")

u1 = User.create(name: 'Pius', image: "https://m.media-amazon.com/images/I/8134XeLmkRL._RI_.jpg", email: 'email@gmail.com', password: '1234')
u2 = User.create(name: 'Pius2', image: "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-max-deep-purple-fall22-a?hei=400&fmt=webp", email: 'p2email@gmail.com', password: '1234')
u3 = User.create(name: 'Pius3', image: "https://images.pushsquare.com/e863359fe6e07/1280x720.jpg", email: 'p3email@gmail.com', password: '1234')

Review.create(user:u1, production:p1, comments: "Good product")
Review.create(user:u2, production:p2, comments: "Never coming back")
Review.create(user:u3, production:p3, comments: "Fantastic product...wow")
Review.create(user:u1, production:p4, comments: "Never coming back")
Review.create(user:u3, production:p5, comments: "Fantastic product...wow")
Review.create(user:u2, production:p2, comments: "Never coming back")
Review.create(user:u3, production:p1, comments: "Fantastic product...wow")
