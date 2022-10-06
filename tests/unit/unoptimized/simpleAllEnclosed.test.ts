import { UnoptimizedBuildingService } from "../../../src/services/unoptimizedBuilding.service";

describe("UnoptimizedBuildingService", () => {
    it("should return 9", () => {
        const unoptimizedBuildingService = new UnoptimizedBuildingService([3, 0, 0, 0, 3]);
        const result = unoptimizedBuildingService.getRainSurface();
        expect(result).toBe(9);
    });
});