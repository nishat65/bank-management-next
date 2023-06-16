'use client'
import { useEffect } from 'react'
import Layout from '../shared/Layout'
import useClientFetch from '@/app/utils/hooks/useFetch'
import AuthProvider from '@/app/utils/provider/AuthContext'
import DashboardTable from './Dashboard/Table'
import { columns } from '@/app/components/Home/Dashboard/Table/header'
import Input from '@/app/components/shared/Input'
import useForm from '@/app/utils/hooks/useForm'


export default function Home() {
    const [values, errors, handleChange, handleSubmit] = useForm({
        initialValues: {
            search: ''
        }
    })
    const { data, loading, getRequest } = useClientFetch(`users/?email=${values.search}`)

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token)
            getRequest({
                Authorization: `Bearer ${token}`,
            })
    }, [values.search])

    return (
        <AuthProvider>
            <Layout>
                <section className='mb-5 flex justify-end'>
                    <Input placeholder='search' className={'w-2/5 outline-none'} value={values.search} name="search" onChange={handleChange} />
                </section>
                <DashboardTable
                    data={data?.results}
                    loading={loading}
                    columns={columns}
                />
            </Layout>
        </AuthProvider>
    )
}
