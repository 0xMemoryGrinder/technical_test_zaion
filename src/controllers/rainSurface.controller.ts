import { Request, Response } from "express";

const unoptimized = (req: Request, res: Response) => {
    res.json({
        message: "unoptimized not implemented yet"
    })
};

const optimized = (req: Request, res: Response) => {
    res.json({
        message: "optimized not implemented yet"
    })
}

export default {
    unoptimized,
    optimized,
}