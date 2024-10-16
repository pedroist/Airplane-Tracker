import express, { Request, Response } from "express";
import prisma from '../lib/prisma';

const router = express.Router();

router.get("/", async (_request: Request, response: Response) => {
    try {
        const planes = await prisma.planes.findMany();
        response.json(planes);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal server error" });
    }
});

export default router;
