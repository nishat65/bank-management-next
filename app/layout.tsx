import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Bank Dashboard',
    description: 'bank dashboard',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true} >
                {children}
                <ToastContainer />
            </body>
        </html>
    )
}
