import { Request, Response } from "express";
import { UnoptimizedBuildingService } from "../services/unoptimizedBuilding.service";

const unoptimized = (req: Request, res: Response) => {
    const { buildingsHeightList } = req.body;
    const unoptimizedBuildingService = new UnoptimizedBuildingService(buildingsHeightList);

    res.json({
        rainSurface: unoptimizedBuildingService.getRainSurface()
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