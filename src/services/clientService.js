import { httpService } from './http.service'
import { utilService } from './utilService'

const addClient = async (client) => {

    const date = new Date()
    let isSuccess = false
    let createdAt = utilService.getFormatedDate(date)
    const clientReturned = await httpService.get(`client/${client.phone}`)

    if (clientReturned) {
        clientReturned.messages.push({
            "model": client.model,
            "text": client.text,
            "createdAt":createdAt
        })
        isSuccess = httpService.put('client', clientReturned)

    }
    if (!clientReturned) {
        const newClient = {
            "first-name": client.firstName,
            "last-name": client.lastName,
            "email": client.email,
            "phone": client.phone,
            "user-consent":client.userConsent,
            "messages": [
                {
                    "model": client.model,
                    "text": client.text,
                    "createdAt": createdAt
                }
            ]
        }
        isSuccess = httpService.post('client', newClient)
    }
    return isSuccess
}

export const clientService = {
    addClient

}