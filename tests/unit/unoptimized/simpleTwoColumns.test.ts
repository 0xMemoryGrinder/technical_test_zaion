import { UnoptimizedBuildingService } from "../../../src/services/unoptimizedBuilding.service";

describe("UnoptimizedBuildingService", () => {
    it("should return 0 with too small array", () => {
        const unoptimizedBuildingService = new UnoptimizedBuildingService([0, 1]);
        const result = unoptimizedBuildingService.getRainSurface();
        expect(result).toBe(0);
    });
});