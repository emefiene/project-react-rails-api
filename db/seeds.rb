# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# m1 = Member.create( name: "John", email: "john@gmail.com", password: "1234")
# m2 = Member.create( name: "Mary", email: "mary@gmail.com", password: "1234")ytt
# m3 = Member.create( name: "Look", email: "look@gmail.com", password: "1234")
# m4 = Member.create( name: "Cook", email: "cook@gmail.com", password: "1234")
p1 = Production.create(
    description: "Women's Slip on Sneakers Womens Canvas Slip on Shoes Fashion Canvas Sneakers for Women Non Slip Loafers Casual Shoes",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71XupDMDoCL._AC_UY695_.jpg",
    price: 21,
    quantity: 20
  

)

p2 = Production.create(
    description: "Casio F108WH Water Resistant Digital Blue Resin Strap Watch",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61liL3F0mCS._AC_UY879_.jpg",
    price: 15,
    quantity: 20

)

p3 = Production.create(
    description: "Reef Men's Twinpin Sandals",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51iFtRKei3L._AC_UY695_.jpg",
    price: 8,
    quantity: 20


)
p4 = Production.create(
    description: "Wrangler Authentics Men's Classic Cargo Stretch Short",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/814rpp-AYUL._AC_UX679_.jpg",
    price: 26,
    quantity: 20
 

)
p5 = Production.create(
    description: "OGIO 2023 Rig 9800 Bag",
    image: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C9103XLI8aML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
    price: 18,
    quantity: 20


)
p6 = Production.create(
    description: "Reef Men's Twinpin Sandals",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51NWBzF4hCL._AC_UX679_.jpg",
    price: 21,
    quantity: 20
  

)
p7 = Production.create(
    description: "YETI Crossroads Backpack 27L, High Desert Clay",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71T6ajSCg5L._AC_SX679_.jpg",
    price: 30,
    quantity: 20
   

)
p8 = Production.create(
    description: "Loungefly Pokemon Vaporeon Cosplay Mini Backpack",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616SvseuApL._AC_SL1024_.jpg",
    price: 48,
    quantity: 20
   

)
# m1 = Member.create( name: "John", email: "john@gmail.com", password: "1234")
# m2 = Member.create( name: "Mary", email: "mary@gmail.com", password: "1234")
# m3 = Member.create( name: "Look", email: "look@gmail.com", password: "1234")
# m4 = Member.create( name: "Cook", email: "cook@gmail.com", password: "1234")

u1 = User.create(name: 'Pius', email: 'email@gmail.com', password: '1234', password_confirmation: "1234", age:"34", address: "2705 heather wood", image: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_400_400/0/1661237685903?e=1685577600&v=beta&t=5uvslq40-HQBxprsfiA9MdCRJliV0lllxcMG4OgOQiA")
u2 = User.create(name: 'John', email: 'p2email@gmail.com', password: '1234' , password_confirmation: "1234", age:"40", address: "301 Orchard street", image: "https://media.licdn.com/dms/image/C5603AQF_b6Um8KJCrA/profile-displayphoto-shrink_100_100/0/1661237685903?e=1685577600&v=beta&t=wmYYFE5UCj5KWbNMzCurR_7H_Y9RZaE7gm0gzygsvdo")
u3 = User.create(name: 'Mike', email: 'p3email@gmail.com', password: '1234' , password_confirmation: "1234" , age:"34", address: "2705 heather wood", image: "https://media.licdn.com/dms/image/C5603AQH_LQJixpUxwg/profile-displayphoto-shrink_100_100/0/1545089788339?e=1685577600&v=beta&t=9wwPOoq6eMB49Vg8XH6490fubrNUqCZewuwXGKrAef0")
u4 = User.create(name: 'Mary', email: 'email@gmail.com', password: '1234', password_confirmation: "1234", age:"34", address: "2705 heather wood", image: "https://media.licdn.com/dms/image/C4D03AQEBh-y-sFABow/profile-displayphoto-shrink_400_400/0/1549083175330?e=1685577600&v=beta&t=5w82H1qWuyjwTVVJsJVrAyorFUeW3Gpvvp3tn1nR2Sc")
u5 = User.create(name: 'Nicole', email: 'p2email@gmail.com', password: '1234' , password_confirmation: "1234", age:"40", address: "301 Orchard street", image: "https://media.licdn.com/dms/image/D5603AQGCdGFG-PYAiQ/profile-displayphoto-shrink_400_400/0/1678302319271?e=1685577600&v=beta&t=QZgHRSnimmeU6g7x8nqtAoteAHn4qXLoGLhX1JpBfLE")
u6 = User.create(name: 'Linda', email: 'p3email@gmail.com', password: '1234' , password_confirmation: "1234" , age:"34", address: "2705 heather wood", image: "https://media.licdn.com/dms/image/C4D03AQER2I-M5MlSrg/profile-displayphoto-shrink_400_400/0/1517393645204?e=1685577600&v=beta&t=UZR5EzV7T03eTT-mZLM590bDA-1OJAkDfvPo_eMW400")

Review.create(user:u1, name:"Pius", production:p5, comments: "I bought this bag specifically for day hikes. I just got back from a trip to Big Bend National Park and can conclude that it worked perfectly for my needs. I hauled 5 liters of water on the hikes as well as a towel and some snacks and essentials. The bag is comfortable to carry and feels bomb proof. The top main compartment zipper lends itself well to a water bladder with straw that can sit in the laptop pouch. The quick access to the large top compartment makes grabbing small items easy. I used the water bottle access to store suncreen and other larger items that I wanted to be quick access. This price is high for this bag, but it’ll last and likely can handle anything you throw at it")
Review.create(user:u2, name:"John", production:p5, comments: "I was skeptical of the bag as I was worried it would be not as durable as it portrayed for the price. I have broken so many zippers on backpacks and this one is legit. I will keep buying these bags if mine does break, but it will take some doing as this thing is tough as nails !!!")
Review.create(user:u3, name:"Mike", production:p5, comments: "Every yeti product I have purchased has exceeded all my expectations and this bag is no different...used it for a week trip and had space to spare and no issues whatsoever...pay a little more for that peace of mind that you have a quality product that will last a lifetime...")
Review.create(user:u4, name:"Mary", production:p5, comments: "I’ve been eyeing this backpack for a while. It’s worth every penny. Almost perfectly made. The only thing that it doesn’t have is a place to put your pens. There are lots of compartments but not a true spot to safely keep my pen. Other than that it’s great.")
Review.create(user:u5, name:"Nicole", production:p8, comments: "I was skeptical of the bag as I was worried it would be not as durable as it portrayed for the price. I have broken so many zippers on backpacks and this one is legit. I will keep buying these bags if mine does break, but it will take some doing as this thing is tough as nails !!!")
Review.create(user:u5, name:"Nicole", production:p1, comments: "Good product")
Review.create(user:u6, name:"Linda", production:p2, comments: "I fucking need my money back")
Review.create(user:u1, name:"Pius", production:p4, comments: "These are a very casual camo short. The fabric is 98% cotton and 2% spandex. They have a very slight stretch to them adding to the comfort. The weight of the fabric is similar to worn denim. They are made in Bangladesh. The size fit is as it should be. I bought a pair of Wrangler camo pants a few years ago that were nicer with more stretch and grip material inside the waistband but these are still decent shorts. I like them. Maybe not five star but at least four. I recommend them.")
Review.create(user:u2, name:"John", production:p4, comments: "Shorts fit well and are very comfortable. Tolerates normal wear and tear in an auto shop setting. Shorts have a little stretch which allows for extra room in case of a single size too small. Overall true to fit/size with extra stretch just in case")
Review.create(user:u3, name:"Mike", production:p4, comments: "Had to reorder this for a 36 was too large for husband. 34 fits perfect. Color is off from picture and what we received. Was looking for jean denim shorts but these are a darker jean color and material doesn’t even look like jean denim material.")
Review.create(user:u6, name:"Linda", production:p3, comments: "My dad said these are perfect. Fits expected. He loves the color, length is correct and they are comfortable!")
Review.create(user:u1, name:"Pius", production:p3, comments: "Have order these for two years and enjoy the fit and quality and pockets")
Review.create(user:u2, name:"John", production:p6, comments: "Good product, love it, can't wait to reorder")
Review.create(user:u3, name:"Mike", production:p7, comments: "I found when fully loaded with water bottles, lunch, laptop and book the backpack straps a little light for the task. Dont think they will live up to the daily expectation's. The rest of the backpack is good, zippers' etc and outer materials and workmanship. Just cant get over the flimsy feeling straps, maybe because they have no padding but anyway i returned it.")