import e from "express";
import Food from "../model/DataModel.js";

const router = e.Router();

router.get('/', async (req, res) => {
    const { limit = 20, page = 1, search } = req?.query;

    try {

        let fetchQuery = {};

        if (search) {
            fetchQuery = {
                dsc: { $regex: search, $options: 'i' }
            }            
        }        

        const items = await Food.find(fetchQuery)
            .limit(Number(limit))
            .skip(Number(limit) * (Number(page) - 1));

        const count = await Food.countDocuments(fetchQuery);
        
        res.json({
            items,
            currentPage: Number(page),
            totalPage: Math.ceil(count / Number(limit)),
            totalItems: count
        })
    } catch (error) {
        console.error('Error fetching items:', error);
    }
})


export default router