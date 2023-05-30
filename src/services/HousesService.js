import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[GETTING HOUSES]', res.data)
        AppState.houses = res.data.map(h => new House(h))
        logger.log(AppState.houses)
    }

    async getHouseById(houseId) {
        const res = await api.get(`api/houses/${houseId}`)
        logger.log('[GETTING HOUSE BY ID]', res.data)
        AppState.activeHouse = new House(res.data)
    }


    async createHouse(formData) {
        const res = await api.post('api/houses', formData)
        logger.log('[CREATING HOUSE]', res.data)
        AppState.houses.unshift(new House(res.data))
    }

    async deleteHouse(houseId) {
        const res = await api.delete(`api/houses/${houseId}`)
        logger.log('[DELETING HOUSE]', res.data)
        AppState.houses = AppState.houses.filter(h => h.id != houseId)
    }
}

export const housesService = new HousesService()