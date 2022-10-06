import { Request, Response, NextFunction } from "express";


export default (req: Request, res: Response, next: NextFunction) => {
    const { buildingsHeightList } = req.body;
    if (!Array.isArray(buildingsHeightList) || buildingsHeightList.length === 0) {
        return res.status(400).json({
            message: "buildingsHeightList must be a filled array",
        });
    }
    const buildingsHeightsAreValid = buildingsHeightList.every((buildingHeight: number) => buildingHeight >= 0);
    if (!buildingsHeightsAreValid) {
        return res.status(400).json({
            error: "Invalid negative building height"
        });
    }
    next();
}