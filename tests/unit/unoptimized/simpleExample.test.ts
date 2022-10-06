import { UnoptimizedBuildingService } from "../../../src/services/unoptimizedBuilding.service";

describe("UnoptimizedBuildingService", () => {
    it("should return 6 whith the array from the subject", () => {
        const unoptimizedBuildingService = new UnoptimizedBuildingService([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
        const result = unoptimizedBuildingService.getRainSurface();
        expect(result).toBe(6);
    });
});