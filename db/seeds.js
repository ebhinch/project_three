require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
mongoose.Promise = global.Promise

const { VineyardModel, WineModel, UserModel, NoteModel, RestaurantModel } = require("./schema.js")

const jeffersonMeritage = new WineModel({
    name: "Meritage",
    vintage: "2015",
    description: "A cedar and blackberry nose followed by a bright black cherry palate, ending with balanced spice",
    price: 31.95,
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/20626121_10155404351165851_9075711873478245884_o.jpg?oh=b015976b1f7a0ce701387a41d7061bc3&oe=5A8621CF"
})

const jeffersonPetitVerdot = new WineModel({
    name: "Petit Verdot",
    vintage: "2015",
    description: "A bouquet of vanilla, spice, and black cherry lead to a complex palate of cranberry, black cherry, cassis, tobacco, balanced acidity. and medium tannins.",
    price: 24.95,
    image: "http://static.shoplightspeed.com/shops/610728/files/003981022/jefferson-vineyards-petit-verdot.jpg"
})

const kingCrose = new WineModel({
    name: "Crose",
    vintage: "NV",
    description: "A dry rosé named after our small town of Crozet. ",
    price: 19,
    image: "http://www.kingfamilyvineyards.com/assets/images/products/pictures/crose.jpg"
})
const kingRoseland = new WineModel({
    name: "Roseland",
    vintage: "2016",
    description: "A refreshing blend of Chardonnay, Viognier, and Petit Manseng, this wine is named after the home of King Family Vineyards: Roseland.",
    price: 22.95,
    image: "http://www.kingfamilyvineyards.com/assets/images/products/pictures/Roseland11111.jpg"
})

const aftonFesta = new WineModel({
    name: "Festa di Bacco",
    vintage: "2014",
    description: "Indicative blend: Sangiovese, Cabernet Franc, Merlot, and Petit Verdot.",
    price: 28,
    image: "https://i.pinimg.com/736x/ab/71/ba/ab71ba3ca986d0882a241782796cda7f--road-trippin-wineries.jpg"
})

const veritasClaret = new WineModel({
    name: "Sauvignon Blanc",
    vintage: "2016",
    description: "Pale yellow as winter sunshine, Veritas Sauvignon Blanc is an intensely aromatic, mouth-wateringly crisp, fruit-filled, dry white wine.",
    price: 25,
    image: "http://www.veritaswines.com/wp-content/uploads/2015/10/veritas-sauv-blanc-NV-WebSmall.png"
})

const veritasMousseux = new WineModel({
    name: "Mousseux",
    vintage: "2016",
    description: "Pale pink in color with salmon highlights, Mousseux has a mousse of fine bubbles that stream from the bottom of the glass. This elegant rose is reasonably full-bodied with refined berry notes and a faintly floral finish.",
    price: 30,
    image: "http://www.veritaswines.com/wp-content/uploads/2015/10/veritas-mousseux-NV_WebSmall.png"
})

const earlyVidal = new WineModel({
    name: "Vidal Young Wine",
    vintage: "2016",
    description: "Petit Manseng that's imminently affordable and fun",
    price: 22,
    image: "https://store.earlymountain.com/assets/images/products/pictures/YoungWine-WhiteBottleOutline.png"
})

const earlyNovum = new WineModel({
    name: "Novum",
    vintage: "2014",
    description: "Novum continues to be an exercise in Cabernet Franc, so it is this variety from EMV Block 10 that drives the aromas and flavor, and in 2014 we bring in a bit of Tannat for backbone and the flavors of darkness.",
    price: 38,
    image: "https://store.earlymountain.com/assets/images/products/pictures/Novum.png"
})

const cAndO = new RestaurantModel({
    name: "C & O Restaurant",
    website: "http://www.candorestaurant.com/"
})

const duners = new RestaurantModel({
    name: "Duner's",
    website: "http://www.dunersrestaurant.com"
})

const theLocal = new RestaurantModel({
    name: "The Local",
    website: "https://www.thelocal-cville.com/"
})

const hamiltons = new RestaurantModel({
    name: "Hamilton's at First and Main",
    website: "http://hamiltonsrestaurant.com/"
})

const mas = new RestaurantModel({
    name: "Mas",
    website: "http://www.mastapas.com/home"
})

const fleurie = new RestaurantModel({
    name: "Fleurie",
    website: "http://www.fleurierestaurant.com/"
})

const earlyMountain = new VineyardModel({
    name: "Early Mountain Vineyards",
    address: "6109 Wolftown-Hood Road, Madison, VA 22727",
    website: "https://www.earlymountain.com/",
    description: "Nestled at the foothills of the majestic Blue Ridge Mountains in Madison County, Virginia.",
    wines: [earlyNovum, earlyVidal],
    restaurants: [cAndO, duners]
})

const jefferson = new VineyardModel({
    name: "Jefferson Vineyards",
    address: "1353 Thomas Jefferson Parkway Charlottesville, Virginia 22902",
    website: "http://jeffersonvineyards.com/",
    description: "Jefferson Vineyards is a family owned winery and vineyard in Charlottesville, Virginia, located where Thomas Jefferson and Philip Mazzei first began the American wine revolution.",
    wines: [jeffersonMeritage, jeffersonPetitVerdot],
    restaurants: [mas, theLocal]
})

const afton = new VineyardModel({
    name: "Afton Mountain Vineyards",
    address: "234 Vineyard Lane, Afton, Virginia 22920",
    website: "http://www.aftonmountainvineyards.com/",
    description: "Afton Mountain Vineyards is one of Virginia's first farm wineries; the original vines were planted in 1978. ",
    wines: [aftonFesta],
    restaurants: [hamiltons, fleurie]
})

const veritas = new VineyardModel({
    name: "Veritas",
    address: "151 Veritas Lane Afton, Virginia 22920",
    website: "http://www.veritaswines.com",
    description: "Nestled at the base of the Blue Ridge Mountains outside Charlottesville, Veritas Vineyards & Winery is best known for its delicious Virginia wine, stunning views and warm hospitality.",
    wines: [veritasClaret, veritasMousseux],
    restaurants: [fleurie, mas]
})

const king = new VineyardModel({
    name: "King Family Vineyards",
    address: "6550 Roseland Farm Crozet, VA 22932",
    website: "http://www.kingfamilyvineyards.com/",
    description: "King Family Vineyards is a family owned and operated winery located at the foothills of the Blue Ridge Mountains in Crozet, Virginia just fifteen minutes from Charlottesville.",
    wines: [kingCrose, kingRoseland],
    restaurants: [cAndO, theLocal]
})

const victoriaNoteOne = new NoteModel({
    title: "Victoria's First Note",
    text: "Let's go to King Family on our trip!"
})

const skylarNoteOne = new NoteModel({
    title: "Skylar's First Note",
    text: "Let's go to Afton!"
})


const hunterNoteOne = new NoteModel({
    title: "Hunter's First Wine",
    text: "We should make dinner reservations"
})

const victoria = new UserModel({
    userName: "vicky.t",
    name: "Victoria",
    hometown: "Atlanta",
    season: "Spring 2018",
    notes: [victoriaNoteOne]
})

const skylar = new UserModel({
    userName: "skyguy",
    name: "Skylar",
    hometown: "Asheville",
    season: "Winter 2017",
    notes: [skylarNoteOne]
})

const hunter = new UserModel({
    userName: "the.mad.duke",
    name: "Hunter",
    hometown: "Decatur",
    season: "Fall 2018",
    notes: [hunterNoteOne]
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
    .then(() => veritas.save())
    .then(() => earlyMountain.save())
    .then(() => console.log("Successful Saved Vineyards"))
    .then(() => mongoose.connection.close())


