import request from "supertest";
import app from "../../../src/app";

describe("POST /rainSurface/unoptimized array with negative values", () => {
    it("should return an error", async () => {
        const response = await request(app).post("/rainSurface/unoptimized").send({
            buildingsHeightList: [1, -1, 2, 3],
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Invalid negative building height");
    });
});