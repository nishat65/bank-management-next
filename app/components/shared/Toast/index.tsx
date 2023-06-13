'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ToastMessage() {
    return (
        <ToastContainer
            className="text-3xl"
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}

export default ToastMessage
