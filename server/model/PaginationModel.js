import mongoose, { Schema } from "mongoose";



const paginationSchema = new Schema(
    {
        catagory: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        count: {
            type: Number,
            required: true,
        },
        itemIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
        }],
       
    },
    {
        timestamps: true,
    }
)

paginationSchema.index({catagory: 1}, {itemIds: 1})

const Pagination = mongoose.model("Pagination", paginationSchema)

 export default Pagination