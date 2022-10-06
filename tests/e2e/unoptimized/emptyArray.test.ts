import request from "supertest";
import app from "../../../src/app";

describe("POST /rainSurface/unoptimized empty array", () => {
    it("should return an error", async () => {
        const response = await request(app).post("/rainSurface/unoptimized").send({
            buildingsHeightList: [],
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("buildingsHeightList must be a filled array");
    });
});