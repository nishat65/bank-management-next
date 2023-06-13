'use client'
import { useEffect, useContext } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { googleAPIs } from '@/app/utils/services/google'
import LoginImage from 'app/assets/login.svg'
import useForm from '@/app/utils/hooks/useForm'
import useClientFetch from '@/app/utils/hooks/useFetch'
import Loading from '@/app/components/shared/Loading/index'
import { ToastContext } from '@/app/utils/provider/ToastContext'
import styles from 'app/login/login.module.css'

export default function LoginForm() {
    const router = useRouter()
    const toast = useContext(ToastContext) as any
    const { data, loading, postRequest } = useClientFetch('auth/login/')
    const {
        data: gData,
        loading: gLoading,
        postRequest: gPostRequest,
    } = useClientFetch('auth/google/login/')

    const [values, error, handleChange, handleSubmit] = useForm({
        initialValues: { email: '', password: '' },
        api: () =>
            postRequest({
                email: values.email,
                password: values.password,
            }).then(() => {
                setTimeout(() => {
                    router.push('/home')
                }, 500)
            }),
    })

    const login = useGoogleLogin({
        onSuccess: (response) => {
            googleAPIs({
                Authorization: `${response.token_type} ${response.access_token}`,
            }).then((res) => {
                const { data } = res
                gPostRequest({
                    email: data.email,
                    given_name: data.given_name,
                    family_name: data.family_name,
                    name: data.name,
                }).then(() => {
                    setTimeout(() => {
                        router.push('/home')
                    }, 500)
                })
            })
        },
        onError: (error) => console.log(error),
        flow: 'implicit',
    })

    useEffect(() => {
        if (data) localStorage.setItem('access_token', data.access)
        if (gData) localStorage.setItem('access_token', gData.access)
    }, [data, gData])

    useEffect(() => {
        if (data?.message) toast.success(data?.message)
        if (gData?.message) toast.success(gData?.message)
    }, [data, gData, toast])

    return (
        <section className="flex h-full w-full">
            <div className="h-full w-full">
                <Image
                    className="h-full w-full"
                    src={LoginImage}
                    alt="login"
                    width={500}
                    height={500}
                ></Image>
            </div>
            <div className="h-full w-full">
                <div className="flex flex-col items-center justify-center h-full w-full gap-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <h2 className="text-5xl">Welcome Back!</h2>
                        <p className="text-3xl font-light">
                            Start managing your finance faster and better
                        </p>
                    </div>
                    <div className="flex flex-col w-4/6 items-center justify-center gap-8">
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                placeholder="Email"
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                className={`h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3 ${
                                    error.email && 'error-outline'
                                }`}
                                type="text"
                            />
                            {error.email && (
                                <p className="error">{error.email}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={`h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3 ${
                                    error.password && 'error-outline'
                                }`}
                            />
                            {error.password && (
                                <p className="error">{error.password}</p>
                            )}
                        </div>
                    </div>
                    <div className="text-3xl flex flex-col items-end justify-center w-4/6">
                        <Link href="/forgot-password">
                            <p className="text-2xl text-emerald-700 font-light">
                                Forgot password
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-4/6 items-center justify-center">
                        <button
                            onClick={handleSubmit}
                            className="bg-emerald-700 h-full w-full text-3xl p-4 rounded-3xl text-white"
                        >
                            {!loading ? 'Login' : <Loading />}
                        </button>
                    </div>
                    <div>
                        <div className={`text-2xl ${styles.or}`}>or</div>
                    </div>
                    <div>
                        <div className="flex gap-10">
                            <div
                                className="border p-4 rounded-2xl cursor-pointer"
                                onClick={() => login()}
                            >
                                <FcGoogle className="text-4xl" />
                            </div>
                            <div className="border p-4 rounded-2xl cursor-pointer">
                                <AiOutlineTwitter className="text-4xl text-blue-500" />
                            </div>
                            <div className="border p-4 rounded-2xl cursor-pointer">
                                <FaFacebookF className="text-4xl text-blue-500" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-4/6 items-center justify-center">
                        <div className="text-2xl font-light">
                            Don&apos;t have an account?
                        </div>
                        <Link href="/register">
                            <p className="text-2xl text-emerald-700 font-light">
                                Register
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
