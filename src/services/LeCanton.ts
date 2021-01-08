import puppeteer from "puppeteer"

class LeCaton {
    async getHotels(checkin: string, checkout: string){
        try{
            const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] })
            const page = await browser.newPage()
            // Open LeCanton reservations
            await page.goto(`https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-br&ad=2&version=MyReservation#/hotel=&hotelname=&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`, {
                waitUntil: "domcontentloaded"
            })
            // wait for the ajax to finish
            await page.waitForSelector("a.active.beBtnBkgColor")
            // looking for available hotels
            const data = await page.evaluate(() => {
                try{
                    return Array.from(document.querySelectorAll("div.entry.available, div.entry.available_withRestriction")).map((dom) => {
                        let price = dom.querySelector("h5.bestChainPriceTextColor") || dom.querySelector("div.hasRestrictions > h5")
                        let restriction = dom.querySelector("div.hasRestrictions > h5") ? true : false
                        return {
                            title: dom.querySelector("h5").textContent.trim(),
                            description: dom.querySelector("p").textContent.trim(),
                            image: dom.querySelector("img").src,
                            price: price.textContent,
                            restriction: restriction
                        }
                    })
                }catch(e){
                    return e.message
                }
            })
            await browser.close()
            if(!Array.isArray(data)){
                console.log("ERROR:", data)
                return false
            }
            return data
        }catch(e){
            console.log("ERROR:", e.message)
            return false
        }
    }
}

export default new LeCaton()