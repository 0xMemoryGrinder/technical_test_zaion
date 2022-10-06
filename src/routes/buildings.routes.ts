import express from "express";
const router = express.Router();
import validateBuildingsHeights from "../middlewares/validateBuildingsHeights.middleware";
import rainSurfaceController from "../controllers/rainSurface.controller";

router.post("/unoptimized",
    [
        validateBuildingsHeights,
        rainSurfaceController.unoptimized
    ]
);

router.post("/optimized",
    [
        validateBuildingsHeights,
        rainSurfaceController.optimized
    ]
);

export default router;