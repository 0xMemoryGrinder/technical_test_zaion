import { OptimizedBuildingService } from "../../../src/services/optimizedBuilding.service";

describe("OptimizedBuildingService", () => {
    it("should return 6 whith the array from the subject", () => {
        const optimizedBuildingService = new OptimizedBuildingService([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
        const result = optimizedBuildingService.getRainSurface();
        expect(result).toBe(6);
    });
});