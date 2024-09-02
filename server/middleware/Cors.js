import { configDotenv } from "dotenv";

configDotenv();

const allowedorigin = process.env.ALLOWED_ORIGINS.split(',')

export const Cors = (req, res, next) => {
    const origin = req.headers.origin
    

    if (origin && allowedorigin.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (req.method === 'OPTIONS') {
            return res.status(200);
        }
    } else {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
}