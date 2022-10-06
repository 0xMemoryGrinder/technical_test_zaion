import { Request, Response } from "express";
import { UnoptimizedBuildingService } from "../services/unoptimizedBuilding.service";
import { OptimizedBuildingService } from "../services/optimizedBuilding.service";

const unoptimized = (req: Request, res: Response) => {
    const { buildingsHeightList } = req.body;
    const unoptimizedBuildingService = new UnoptimizedBuildingService(buildingsHeightList);

    res.json({
        rainSurface: unoptimizedBuildingService.getRainSurface()
    })
};

const optimized = (req: Request, res: Response) => {
    const { buildingsHeightList } = req.body;
    const optimizedBuildingService = new OptimizedBuildingService(buildingsHeightList);

    res.json({
        rainSurface: optimizedBuildingService.getRainSurface()
    })
}

export default {
    unoptimized,
    optimized,
}