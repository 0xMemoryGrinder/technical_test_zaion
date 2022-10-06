import { UnoptimizedBuildingService } from "../../../src/services/unoptimizedBuilding.service";

describe("UnoptimizedBuildingService", () => {
    it("should return 0 with too small array", () => {
        const optimizedBuildingService = new UnoptimizedBuildingService([0, 1]);
        const result = optimizedBuildingService.getRainSurface();
        expect(result).toBe(0);
    });
});