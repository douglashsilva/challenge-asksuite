import { Request, Response } from "express"
import moment from "moment"

import LeCanton from "@services/LeCanton"
 
class Robo {

    async searchHotel(req: Request, res: Response){
        let { checkin, checkout } = req.body

        // Validation Date
        if(!checkin || !checkout){
            return res.status(400).json({ error: "Date Required" })
        }
        if(!moment(checkin, "DD/MM/YYYY", true).isValid() || !moment(checkout, "DD/MM/YYYY", true).isValid()){
            return res.status(400).json({ error: "Date Invalid" })
        }

        // Clear Date
        checkin = checkin.replace(/[^0-9]/gim, "")
        checkout = checkout.replace(/[^0-9]/gim, "")

        const data = await LeCanton.getHotels(checkin,checkout)
        if(!data){
            // BOT maintenance required, something in the page's DOM has changed. (Check Logs)
            return res.status(500).json({ error: "Internal Server Error" })
        }

        // Everything went well, in this bagasse :)
        return res.status(200).json(data)
    }

}

export default new Robo()