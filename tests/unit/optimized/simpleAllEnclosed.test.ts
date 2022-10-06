import { OptimizedBuildingService } from "../../../src/services/optimizedBuilding.service";

describe("OptimizedBuildingService", () => {
    it("should return 9", () => {
        const optimizedBuildingService = new OptimizedBuildingService([3, 0, 0, 0, 3]);
        const result = optimizedBuildingService.getRainSurface();
        expect(result).toBe(9);
    });
});