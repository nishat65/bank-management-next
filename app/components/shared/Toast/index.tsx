import { useState, useEffect } from 'react'
function ToastMessage(props: { message: string; show: boolean }) {
    const { message } = props
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        let id: NodeJS.Timeout
        if (props.show) {
            setShowToast(true)
            id = setTimeout(() => {
                setShowToast(false)
            }, 2000)
        }
        return () => id && clearTimeout(id)
    }, [props])

    if (!showToast) return null

    return (
        <div
            className={`flex items-center fixed w-fit h-16 top-4 right-4 bg-emerald-700 text-white px-4 py-2 rounded shadow text-3xl`}
        >
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-10 w-10 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4"
                    ></path>
                </svg>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ToastMessage
