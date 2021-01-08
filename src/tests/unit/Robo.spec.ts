import LeCanton from "@services/LeCanton"

describe("LeCanton Service", () => {
    it("Should return Array", (done) => {
        LeCanton.getHotels("12012021","15012021").then((data) => {
            let array = Array.isArray(data)
            expect(array).toBe(true)
            done()
        })
    })
})