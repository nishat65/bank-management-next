'use client'
import { usePathname, useRouter } from 'next/navigation'
import styles from '@/app/components/shared/SideBar/sidebar.module.css'
import { commonColor } from '@/app/utils/constant'

import { ROUTES_CONFIG } from './routesConfig'

export default function SideBar() {
    const pathName = usePathname()
    const router = useRouter()

    function activePath(path: string) {
        const pathRegex = new RegExp(path)
        if (pathName.match(pathRegex)) return `rounded-2xl text-white bg-${commonColor.primary}`
        else return `text-${commonColor.primary}`
    }

    return (
        <aside className={`${styles.drawer}`}>
            <div></div>
            <ul className={`flex flex-col gap-8`}>
                {ROUTES_CONFIG.map((item) => {
                    return (
                        <li
                            className={`cursor-pointer flex items-center gap-4 pl-6 py-3 ${activePath(item.pathName)}`}
                            key={item.id}
                            onClick={() => router.replace(item.pathName)}
                        >
                            <div className='text-3xl'>{item.icon}</div>
                            <div className='text-3xl font-light'>
                                {item.name}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}