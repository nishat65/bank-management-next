import { createColumnHelper } from '@tanstack/react-table'
import { FiTrash, FiEdit2 } from 'react-icons/fi'

import { IUser } from '@/app/utils/types'

type ICol = IUser & { '': '' }

const columnHelper = createColumnHelper<ICol>()

export const columns = [
    columnHelper.accessor('id', {
        header: 'Id',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('role', {
        header: 'Role',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('first_name', {
        header: 'First Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('last_name', {
        header: 'Last Name',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date_joined', {
        header: 'Date Joined',
        cell: (info) => info.getValue(),
    }),
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
