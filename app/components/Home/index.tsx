'use client'
import { useEffect } from 'react'
import Layout from '../shared/Layout'
import useClientFetch from '@/app/utils/hooks/useFetch'
import AuthProvider from '@/app/utils/provider/AuthContext'
import DashboardTable from './Dashboard/Table'
import { columns } from '@/app/components/Home/Dashboard/Table/header'

export default function Home() {
    const { data, loading, getRequest } = useClientFetch('users/')

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
                <DashboardTable
                    data={data?.data}
                    loading={loading}
                    columns={columns}
                />
            </Layout>
        </AuthProvider>
    )
}
