'use client'
import { useEffect } from 'react'
import axios from 'axios'
import Layout from "../shared/Layout"
import useClientFetch from '@/app/utils/hooks/useFetch'
import AuthProvider from '@/app/utils/provider/AuthContext'

export default function Home() {
    const {
        data,
        loading,
        getRequest,
    } = useClientFetch('users/')

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token)
            getRequest({
                Authorization: `Bearer ${token}`,
            })
    }, [])

    return (
        <AuthProvider>
            <Layout>
                <div>Home Page</div>
            </Layout>
        </AuthProvider>
    )
}
