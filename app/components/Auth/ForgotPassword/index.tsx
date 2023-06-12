'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log('Password reset requested for:', email)
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center relative">
            <div className="absolute top-8 left-8 text-6xl text-emerald-700 border-2 border-emerald-700 rounded-2xl p-2">
                <Link href="/login">
                    <AiOutlineArrowLeft />
                </Link>
            </div>
            <div className="w-1/3 mx-auto p-14 sm:p-14 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-300 text-gray-900">
                    Forgot Password
                </h2>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            placeholder="Email"
                            // value={values.email}
                            name="email"
                            // onChange={handleChange}
                            className={`h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3 ${''}`}
                            type="text"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-emerald-700 h-full w-full text-3xl p-4 rounded-3xl text-white"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
