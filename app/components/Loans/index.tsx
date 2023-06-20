'use client'
import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { createColumnHelper } from '@tanstack/react-table'
import { FiTrash, FiEdit2 } from 'react-icons/fi'
import { ILoans } from '@/app/utils/types'
import Layout from '../shared/Layout'
import useClientFetch from '@/app/utils/hooks/useFetch'
import AuthProvider from '@/app/utils/provider/AuthContext'
import Pagination from '@/app/components/shared/Pagination'
import LoansTable from './LoansTable'
import { commonColor } from '@/app/utils/constant'
import Input from '@/app/components/shared/Input'
import useForm from '@/app/utils/hooks/useForm'

type ICol = ILoans & { '': '' }

const columnHelper = createColumnHelper<ICol>()

const { primary } = commonColor

function statusCapsule(value: string) {
    if (value === 'approved') return 'bg-emerald-300'
    if (value === 'rejected') return 'bg-red-500 text-white'
    if (value === 'pending') return 'bg-yellow-400'
}

export default function Home() {
    const router = useRouter()
    const [values, errors, handleChange, handleSubmit] = useForm({
        initialValues: {
            search: '',
        },
    })
    const { data, loading, getRequest } = useClientFetch(
        `loans/admin/?email=${values.search}`
    )

    const columns = [
        columnHelper.accessor('id', {
            header: 'Id',
            cell: (info) => (
                <div
                    className={`text-${primary}`}
                >
                    {info.getValue()}
                </div>
            ),
        }),
        columnHelper.accessor('customer.email', {
            header: 'Customer Email',
            cell: (info: any) => (
                <div>{info.row.original['customer.email']}</div>
            ),
        }),
        columnHelper.accessor('customer.date_joined', {
            header: 'Customer Date Joined',
            cell: (info: any) => info.row.original['customer.date_joined'],
        }),
        columnHelper.accessor('amount', {
            header: 'Amount',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: (info) => (
                <div
                    className={`rounded-lg bg-emerald-300 text-center ${statusCapsule(
                        info.getValue()
                    )}`}
                >
                    {info.getValue()}
                </div>
            ),
        }),
        columnHelper.accessor('agent.email', {
            header: 'Agent Email',
            cell: (info: any) => info.row.original['agent.email'],
        }),
        columnHelper.accessor('', {
            header: 'Action',
            cell: (info) => (
                <div className="flex items-center justify-center gap-8">
                    <FiTrash className="text-red-500 cursor-pointer" />
                    <FiEdit2 className="cursor-pointer" onClick={() => router.push(`loans/${info.row.original.id}`)} />
                </div>
            ),
        }),
    ]

    const dataList: ILoans[] = useMemo(
        () =>
            data
                ? data.results.map((item: ILoans) => {
                    return {
                        id: item.id,
                        'customer.email': item.customer.email,
                        'customer.date_joined': item.customer.date_joined,
                        amount: item.amount,
                        status: item.status,
                        'agent.email': item.agent.email,
                    }
                })
                : data,
        [data]
    )

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
