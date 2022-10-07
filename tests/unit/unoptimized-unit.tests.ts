import { UnoptimizedBuildingService } from "../../src/services/unoptimizedBuilding.service";

describe("Unit-tests", () => {
    describe("UnoptimizedBuildingService", () => {

        it("should return 326 with complexMediumSize", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([1, 27, 28, 17, 0, 17, 21, 0, 0, 0, 0, 2, 0, 0, 0, 0, 30, 29, 28, 27, 26, 27, 28, 29, 30, 3, 2, 3, 2, 3, 2, 3]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(326);
        });

        it("should return 0 with wide pyramid", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(0);
        });

        it("should return 0 with all building", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([10, 10, 10, 10, 10]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(0);
        });

        it("should return 9 with simple enclosed", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([3, 0, 0, 0, 3]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(9);
        });

        it("should return 6 whith the array from the subject", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(6);
        });

        it("should return 0 with too small array", () => {
            const unoptimizedBuildingService = new UnoptimizedBuildingService([0, 1]);
            const result = unoptimizedBuildingService.getRainSurface();
            expect(result).toBe(0);
        });
    });
})