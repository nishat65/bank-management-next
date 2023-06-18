'use client'
import { useEffect, useMemo } from 'react'
import Layout from '../shared/Layout'
import useClientFetch from '@/app/utils/hooks/useFetch'
import AuthProvider from '@/app/utils/provider/AuthContext'
import Pagination from '@/app/components/shared/Pagination'
import LoansTable from './LoansTable'
import { columns } from './LoansTable/header'
import Input from '@/app/components/shared/Input'
import useForm from '@/app/utils/hooks/useForm'
import { ILoans } from '@/app/utils/types'

export default function Home() {
    const [values, errors, handleChange, handleSubmit] = useForm({
        initialValues: {
            search: '',
        },
    })
    const { data, loading, getRequest } = useClientFetch(
        `loans/admin/?email=${values.search}`
    )

    const dataList: ILoans[] = useMemo(() => data ? data.results.map((item: ILoans) => {
        return {
            id: item.id,
            "customer.email": item.customer.email,
            "customer.date_joined": item.customer.date_joined,
            'amount': item.amount,
            'status': item.status,
            // 'manager.first_name': item.manager.first_name,
            // 'manager.last_name': item.manager.last_name,
            'agent.email': item.agent.email,
            // 'agent.first_name': item.agent.email,
            // 'agent.last_name': item.agent.id
        }
    }) : data, [data])

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
                <section className="mb-5 flex justify-end">
                    <Input
                        placeholder="search"
                        className={'w-2/5 outline-none'}
                        value={values.search}
                        name="search"
                        onChange={handleChange}
                    />
                </section>
                <LoansTable
                    data={dataList}
                    loading={loading}
                    columns={columns}
                />
                <Pagination
                    page={1}
                    next={data?.next}
                    previous={data?.previous}
                    totalPage={data?.count}
                />
            </Layout>
        </AuthProvider>
    )
}
