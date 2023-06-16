import { MdSpaceDashboard, MdAnalytics } from 'react-icons/md'
import { FaMoneyCheckAlt } from 'react-icons/fa'
interface IRoutesConfig {
    id: string
    name: string
    alias: string
    icon: React.ReactElement
    pathName: string
}
export const ROUTES_CONFIG: IRoutesConfig[] = [
    {
        id: 'dashboard',
        name: 'Dashboard',
        alias: 'Home',
        icon: <MdSpaceDashboard />,
        pathName: '/home',
    },
    {
        id: 'loans',
        name: 'Loans',
        alias: 'Loans',
        icon: <FaMoneyCheckAlt />,
        pathName: '/loans',
    },
    {
        id: 'analytics',
        name: 'Analytics',
        alias: 'Analytics',
        icon: <MdAnalytics />,
        pathName: '/analytics',
    },
]
