require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { Vineyard, Wine, User } = require("./schema.js")

const jeffersonMeritage = new WineModel({
    name: "Meritage",
    vintage: "2015",
    description: "A cedar and blackberry nose followed by a bright black cherry palate, ending with balanced spice",
    price: 31.95,
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/20626121_10155404351165851_9075711873478245884_o.jpg?oh=b015976b1f7a0ce701387a41d7061bc3&oe=5A8621CF"
})

const kingCrose = new WineModel({
    name: "",
    vintage: "NV",
    description: "A dry rosé named after our small town of Crozet. ",
    price: 19,
    image: "http://www.kingfamilyvineyards.com/assets/images/products/pictures/crose.jpg"
})

const aftonFesta = new WineModel({
    name: "Festa di Bacco",
    vintage: "2014",
    description: "Indicative blend: Sangiovese, Cabernet Franc, Merlot, and Petit Verdot.",
    price: 28,
    image: "https://i.pinimg.com/736x/ab/71/ba/ab71ba3ca986d0882a241782796cda7f--road-trippin-wineries.jpg"
})

const jefferson = new VineyardModel({
    name: "Jefferson Vineyards",
    address: "1353 Thomas Jefferson Parkway Charlottesville, Virginia 22902",
    website: "http://jeffersonvineyards.com/",
    description: "Jefferson Vineyards is a family owned winery and vineyard in Charlottesville, Virginia, located where Thomas Jefferson and Philip Mazzei first began the American wine revolution.",
    wines: [jeffersonMeritage]
})

const afton = new VineyardModel({
    name: "Afton Mountain Vineyards",
    address: "234 Vineyard Lane, Afton, Virginia 22920",
    website: "http://www.aftonmountainvineyards.com/",
    description: "Afton Mountain Vineyards is one of Virginia's first farm wineries; the original vines were planted in 1978. ",
    wines: [aftonFesta]
})

const king = new VineyardModel({
    name: "King Family Vineyards",
    address: "6550 Roseland Farm Crozet, VA 22932",
    website: "http://www.kingfamilyvineyards.com/",
    description: "King Family Vineyards is a family owned and operated winery located at the foothills of the Blue Ridge Mountains in Crozet, Virginia just fifteen minutes from Charlottesville.",
    wines: [kingCrose]
})

const victoria = new UserModel({
    userName: "vicky.t",
    name: "Victoria",
    hometown: "Atlanta",
    season: "Spring 2018"
})

const skylar = new UserModel({
    userName: "skyguy",
    name: "Skylar",
    hometown: "Asheville",
    season: "Winter 2017"
})

const hunter = new UserModel({
    userName: "the.mad.duke",
    name: "Hunter",
    hometown: "Decatur",
    season: "Fall 2018"
})

UserModel.remove({})
    .then(() => hunter.save())
    .then(() => skylar.save())
    .then(() => victoria.save())
    .then(() => console.log("Successful Saved Users"))

VineyardModel.remove({})
    .then(() => king.save())
    .then(() => afton.save())
    .then(() => jefferson.save())
    .then(() => console.log("Successful Saved Vineyards"))
    .then(() => mongoose.connection.close())

