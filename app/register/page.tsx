import Image from 'next/image'
import Link from 'next/link'
import LoginImage from 'app/assets/login.svg'

import styles from 'app/register/register.module.css'

export default function Login() {
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
                        <h2 className="text-5xl">Welcome!</h2>
                        <p className="text-3xl font-light">
                            Start managing your finance faster and better
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-4/6 items-center justify-center gap-6">
                        <div className="flex gap-2 w-full items-center gap-6">
                            <input
                                placeholder="First Name"
                                className="h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3"
                                type="text"
                            />
                            <input
                                placeholder="Last Name"
                                className="h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3"
                                type="text"
                            />
                        </div>
                        <input
                            placeholder="Email"
                            className="h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3"
                            type="text"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-4/6 items-center justify-center">
                        <button className="bg-emerald-700 h-full w-full text-3xl p-4 rounded-3xl text-white">
                            Login
                        </button>
                    </div>
                    <div>
                        <div className={`text-2xl ${styles.or}`}>or</div>
                    </div>
                    <div className="flex gap-2 w-4/6 items-center justify-center">
                        <div className="text-2xl font-light">
                            Already have an account?
                        </div>
                        <Link href="/login">
                            <p className="text-2xl text-emerald-700 font-light">
                                Login
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
