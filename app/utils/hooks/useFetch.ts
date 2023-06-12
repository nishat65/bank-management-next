import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { baseURL } from '../constant'

export default function useClientFetch(apiEndpoint: string) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null) as any

    async function getRequest() {
        const url = `${baseURL}${apiEndpoint}`
        setLoading(true)
        try {
            const res: AxiosResponse<any> = await axios.get(url)
            setData(res.data)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    async function postRequest(data: any) {
        const url = `${baseURL}${apiEndpoint}`
        setLoading(true)
        try {
            const res: AxiosResponse<any> = await axios.post(url, data)
            setData(res.data)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, getRequest, postRequest }
}
