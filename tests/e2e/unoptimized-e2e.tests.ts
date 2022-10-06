import request from "supertest";
import app from "../../src/app";

describe("E2E", () => {
    describe("Unoptimized", () => {
        it("should return an error for empty array", async () => {
            const response = await request(app).post("/rainSurface/unoptimized").send({
                buildingsHeightList: [],
            });
            expect(response.status).toBe(400);
            expect(response.body.error).toBe("buildingsHeightList must be a filled array");
        });
        it("should return an error for negative values", async () => {
            const response = await request(app).post("/rainSurface/unoptimized").send({
                buildingsHeightList: [],
            });
            expect(response.status).toBe(400);
            expect(response.body.error).toBe("buildingsHeightList must be a filled array");
        });
    })
});