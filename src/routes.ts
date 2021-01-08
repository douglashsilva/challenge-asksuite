import { Router } from "express"
export const router = Router()

import Robo from "@controllers/Robo"

router.post("/buscar", Robo.searchHotel)