'use client'
import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { AiOutlineArrowLeft, AiFillEdit } from 'react-icons/ai'

import Layout from '@/app/components/shared/Layout'
import useForm from '@/app/utils/hooks/useForm'
import useClientFetch from '@/app/utils/hooks/useFetch'
import { commonColor } from '@/app/utils/constant'
import CustomerFormView from '@/app/components/Loans/Details/Form/Customer'
import LoanFormView from '@/app/components/Loans/Details/Form/Loan'

import styles from '@/app/components/Loans/Details/Form/Form.module.css'

let { primary } = commonColor

function Detail() {
    const router = useRouter()
    const params = useParams()
    const { data, loading, getRequest } = useClientFetch(
        `loans/admin/${params.id}/`
    )
    const [values, error, handleChange, handleSubmit] = useForm({
        initialValues: {},
    })

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        getRequest({
            Authorization: `Bearer ${token}`,
        })
    }, [])

    console.log(data, 'data----------')

    return (
        <Layout>
            <section
                className={`mb-5 cursor-pointer text-6xl w-fit text-emerald-700 ${styles['border-1']} border-emerald-700 rounded-2xl p-2`}
                onClick={() => router.back()}
            >
                <AiOutlineArrowLeft />
            </section>
            <article
                className={`mt-8 border-${primary} ${styles['border-1']} rounded-2xl p-4`}
            >
                <div
                    className={`flex text- items-center text-${primary} font-normal text-4xl gap-4`}
                >
                    Edit Customer {<AiFillEdit />}
                </div>
                <LoanFormView data={data} />
                <CustomerFormView data={data} />
            </article>
        </Layout>
    )
}

export default Detail
