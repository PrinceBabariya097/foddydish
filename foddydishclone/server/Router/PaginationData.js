import e from "express";
import mongoose from "mongoose";

const router = e.Router();

router.get('/', async (req, res) => {
    try {

        const items = mongoose.connection.db.collection("pagination").find().toArray();

        items.then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json({ message: err.message })
        })
        
    } catch (error) {
        console.error('Error fetching items:', error);
        res.json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { limit = 20, page = 1, search } = req?.query;

        const data = mongoose.connection.db.collection(`${req.params.id}`).find().toArray();

        const items = await data

        const count = items.length

        const limitesItems = items.slice(Number(limit) * (Number(page) - 1), Number(limit) * Number(page))

        res.json(
            {
                items: limitesItems,
                currentPage: Number(page),
                totalPage: Math.ceil(count / Number(limit)),
                totalItems: count
            })
    } catch (error) {
        console.error('Error fetching items:', error);
        res.json(error)
    }
})

export default router