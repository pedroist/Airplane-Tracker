import express, { Request, Response } from "express";
import prisma from '../lib/prisma';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 30;
    const skip = (page - 1) * limit;

    try {
        const planes = await prisma.planes.findMany({
            skip,
            take: limit,
        });
        res.json(planes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
