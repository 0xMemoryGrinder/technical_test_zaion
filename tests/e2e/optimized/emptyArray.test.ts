import request from "supertest";
import app from "../../../src/app";

describe("POST /rainSurface/optimized empty array", () => {
    it("should return an error", async () => {
        const response = await request(app).post("/rainSurface/optimized").send({
            buildingsHeightList: [],
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("buildingsHeightList must be a filled array");
    });
});