import axios, { AxiosResponse } from 'axios'
import { googleAPIURL } from '../constant'

export async function googleAPIs(headers: any): Promise<any> {
    try {
        const response = await axios.get(googleAPIURL, {
            headers: {
                ...headers,
            },
        })
        return response
    } catch (error) {
        console.log(error, 'error')
    }
}
