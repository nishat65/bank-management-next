'use client'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { baseURL } from '../constant'

export default function useClientFetch(apiEndpoint: string) {
    const [data, setData] = useState<any>(null)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null) as any

    async function getRequest(headers = {}) {
        const url = `${baseURL}${apiEndpoint}`
        setLoading(true)
        try {
            const res: AxiosResponse<any> = await axios.get(url, {
                headers: {
                    ...headers,
                },
            })
            setData(res.data)
        } catch (error: any) {
            if (error?.response?.status == 401) router.replace('/')
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    async function postRequest(data: any, headers: any = {}) {
        const url = `${baseURL}${apiEndpoint}`
        setLoading(true)
        try {
            const res: AxiosResponse<any> = await axios.post(url, data, {
                headers: {
                    ...headers,
                },
            })
            setData(res.data)
        } catch (error: any) {
            if (error?.response?.status == 401) router.replace('/')
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, error, getRequest, postRequest }
}
