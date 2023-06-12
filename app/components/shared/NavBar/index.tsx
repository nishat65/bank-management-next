import { FiLogOut } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { commonColor } from '@/app/utils/constant'

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul className="flex gap-4 p-4 text-3xl">
                    <li className="grow">
                    </li>
                    <li className="text-5xl mr-4">
                        <MdManageAccounts className={`text-${commonColor.primary}`} />
                    </li>
                    <li className="text-5xl ml-4">
                        <FiLogOut className={`text-${commonColor.primary}`} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}