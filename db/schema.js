const mongoose = require("mongoose")


//define schema for each model
// const restaurantSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     website: {
//         type: String,
//         required: true
//     }

// })

const wineSchema = mongoose.Schema({
    name: {
        type: String,
        default: "New Wine Name"
    },
    vintage: {
        type: String,
        default: "New Wine Vintage"
    },
    description: {
        type: String,
        default: "New Wine Description"
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: "New Wine Image"
    }
})

const vineyardSchema = mongoose.Schema({
    name: {
        type: String,
        default: "New Winery Name"
    },
    address: {
        type: String,
        default: "New Winery Address"
    },
    website: {
        type: String,
        default: "New Winery URL"
    },
    description: {
        type: String,
        default: "New Winery Description"
    },
    wines: [wineSchema]
    // , restaurants: [restaurantSchema]
})

const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    hometown: String,
    season: String
})

// const RestaurantModel = mongoose.model("Restaurant", restaurantSchema)
const VineyardModel = mongoose.model("Vineyard", vineyardSchema)
const WineModel = mongoose.model("Wine", wineSchema)
const UserModel = mongoose.model("User", userSchema)

module.exports = {
    // RestaurantModel: RestaurantModel,
    VineyardModel: VineyardModel,
    WineModel: WineModel,
    UserModel: UserModel
}
