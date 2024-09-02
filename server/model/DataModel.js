import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodSchema = new Schema(
    {
        img: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            index: true,
        },
        dsc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        catagory: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

FoodSchema.index({name: 1}, {catagory: 1})

const Food = mongoose.model("Food", FoodSchema)

export default Food