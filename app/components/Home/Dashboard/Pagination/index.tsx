import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { commonColor } from '@/app/utils/constant'

const { primary } = commonColor

function Pagination(props: {
    page: number
    next: string | null
    previous: string | null
    totalPage: number
}) {
    const { page, totalPage, next, previous } = props
    return (
        <div className="flex justify-center items-center gap-6 mt-4 text-2xl">
            <div
                className={`text-${primary} ${
                    !previous && 'text-gray-400 cursor-not-allowed'
                }`}
            >
                <AiFillCaretLeft />
            </div>
            <div>{page}</div>
            <div>/</div>
            <div>{totalPage}</div>
            <div
                className={`text-${primary} ${
                    !next && 'text-gray-400 cursor-not-allowed'
                }`}
            >
                <AiFillCaretRight />
            </div>
        </div>
    )
}

export default Pagination
