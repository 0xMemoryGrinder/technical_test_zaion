import { OptimizedBuildingService } from "../../../src/services/optimizedBuilding.service";

describe("OptimizedBuildingService", () => {
    it("should return 0 with too small array", () => {
        const optimizedBuildingService = new OptimizedBuildingService([0, 1]);
        const result = optimizedBuildingService.getRainSurface();
        expect(result).toBe(0);
    });
});