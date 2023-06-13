'use client'
import { createContext, ReactNode } from 'react'
import { toast } from 'react-toastify'

import ToastMessage from '@/app/components/shared/Toast/index'

export const ToastContext = createContext(null) as any

export default function ToastProvider({ children }: { children: ReactNode }) {
    return (
        <ToastContext.Provider value={toast}>
            {children}
            <ToastMessage />
        </ToastContext.Provider>
    )
}
