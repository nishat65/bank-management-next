import { useRouter } from "next/navigation"
import { FiLogOut } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { commonColor } from '@/app/utils/constant'

export default function NavBar() {
    const router = useRouter()

    function logoutHandler() {
        router.replace('/login')
        localStorage.clear()
    }
    return (
        <header>
            <nav>
                <ul className="flex gap-4 p-4 text-3xl">
                    <li className="grow">
                    </li>
                    <li className="text-5xl mr-4 cursor-pointer">
                        <MdManageAccounts className={`text-${commonColor.primary}`} />
                    </li>
                    <li className="text-5xl ml-4 cursor-pointer" onClick={() => logoutHandler()}>
                        <FiLogOut className={`text-${commonColor.primary}`} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}