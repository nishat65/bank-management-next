import { useRouter } from 'next/navigation'
import { createColumnHelper } from '@tanstack/react-table'
import { FiTrash, FiEdit2 } from 'react-icons/fi'

import { ILoans } from '@/app/utils/types'

type ICol = ILoans & { '': '' }

const columnHelper = createColumnHelper<ICol>()

function statusCapsule(value: string) {
    if (value === 'approved') return 'bg-emerald-300'
    if (value === 'rejected') return 'bg-red-500 text-white'
    if (value === 'pending') return 'bg-yellow-400'
}

export const columns = [
    columnHelper.accessor('id', {
        header: 'Id',
        cell: (info) => <div>{info.getValue()}</div>,
    }),
    columnHelper.accessor('customer.email', {
        header: 'Customer Email',
        cell: (info: any) => <div>{info.row.original['customer.email']}</div>,
    }),
    columnHelper.accessor('customer.date_joined', {
        header: 'Customer Date Joined',
        cell: (info: any) => info.row.original['customer.date_joined'],
    }),
    columnHelper.accessor('amount', {
        header: 'Amount',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => (
            <div
                className={`rounded-lg bg-emerald-300 text-center ${statusCapsule(
                    info.getValue()
                )}`}
            >
                {info.getValue()}
            </div>
        ),
    }),
    // columnHelper.accessor('manager.first_name', {
    //     header: 'Manager First Name',
    //     cell: (info: any) => info.row.original['manager.first_name'],
    // }),
    // columnHelper.accessor('manager.last_name', {
    //     header: 'Manager Last Name',
    //     cell: (info: any) => info.row.original['manager.last_name'],
    // }),
    columnHelper.accessor('agent.email', {
        header: 'Agent Email',
        cell: (info: any) => info.row.original['agent.email'],
    }),
    // columnHelper.accessor('agent.first_name', {
    //     header: 'Agent First Name',
    //     cell: (info: any) => info.row.original['agent.first_name'],
    // }),
    // columnHelper.accessor('agent.last_name', {
    //     header: 'Agent Last Name',
    //     cell: (info: any) => info.row.original['agent.last_name'],
    // }),
    columnHelper.accessor('', {
        header: 'Action',
        cell: () => (
            <div className="flex items-center justify-center gap-8">
                <FiTrash className="text-red-500 cursor-pointer" />
                <FiEdit2 className="cursor-pointer" />
            </div>
        ),
    }),
]
