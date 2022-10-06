import { UnoptimizedBuildingService } from "../../../src/services/unoptimizedBuilding.service";

describe("UnoptimizedBuildingService", () => {
    it("should return ", () => {
        const unoptimizedBuildingService = new UnoptimizedBuildingService([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        const result = unoptimizedBuildingService.getRainSurface();
        expect(result).toBe(0);
    });
});