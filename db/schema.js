const mongoose = require("mongoose")


//define schema for each model

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

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
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
    wines: [wineSchema],
    restaurants: [restaurantSchema]
})

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        default: "New Note Title"
    },
    text: {
        type: String,
        default: "New Note Text"
    }
})

const userSchema = mongoose.Schema({
    userName: String,
    name: String,
    hometown: String,
    season: String,
    notes: [noteSchema]
})

// const RestaurantModel = mongoose.model("Restaurant", restaurantSchema)
const VineyardModel = mongoose.model("Vineyard", vineyardSchema)
const WineModel = mongoose.model("Wine", wineSchema)
const RestaurantModel = mongoose.model("Restaurant", restaurantSchema)
const UserModel = mongoose.model("User", userSchema)
const NoteModel = mongoose.model("Note", noteSchema)

module.exports = {
    // RestaurantModel: RestaurantModel,
    VineyardModel: VineyardModel,
    WineModel: WineModel,
    UserModel: UserModel,
    NoteModel: NoteModel,
    RestaurantModel: RestaurantModel

}
