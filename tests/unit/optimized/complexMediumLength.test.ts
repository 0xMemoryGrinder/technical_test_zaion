import { OptimizedBuildingService } from "../../../src/services/optimizedBuilding.service";

describe("OptimizedBuildingService", () => {
    it("should return ", () => {
        const optimizedBuildingService = new OptimizedBuildingService([1, 27, 28, 17, 0, 17, 21, 0, 0, 0, 0, 2, 0, 0, 0, 0, 30, 29, 28, 27, 26, 27, 28, 29, 30, 3, 2, 3, 2, 3, 2, 3]);
        const result = optimizedBuildingService.getRainSurface();
        expect(result).toBe(326);
    });
});