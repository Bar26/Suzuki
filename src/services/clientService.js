import { httpService } from './http.service'
import { utilService } from './utilService'

const addClient = (client) => {
    const date= new Date()
    let createdAt = utilService.getFormatedDate(date)
    let newClient = { ...client, createdAt }
    //TO DO - check if client already exists!
    httpService.post('client', newClient)
}
export const clientService = {
    addClient

}