import request from "supertest"
import { app, server } from "../../server"

describe("POST /buscar", () => {
    it("Should return status 400 with 'Date Invalid' error", (done) => {
        request(app)
        .post("/buscar")
        .send({ checkin: "08/10/2021", checkout: "08/10/202" })
        .expect(400, {
            error: "Date Invalid"
        }, done)
    })
    it("Should return status 400 with 'Date Required' error", (done) => {
        request(app)
        .post("/buscar")
        .send({ checkin: "08/10/2021" })
        .expect(400, {
            error: "Date Required"
        }, done)
    })
    it("Should return status 200", (done) => {
        request(app)
        .post("/buscar")
        .send({ checkin: "12/01/2021", checkout: "15/01/2021" })
        .expect(200, done)
    })
})

afterEach(() => {
    server.close()
});