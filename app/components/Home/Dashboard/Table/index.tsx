import Table from '@/app/components/shared/Table'
import { commonColor } from '@/app/utils/constant'
import styles from './table.module.css'

const { primary } = commonColor

function DashboardTable(props: { data: any; columns: any; loading: boolean }) {
    return (
        <section className="min-h-[20%] h-fit w-full">
            <Table
                {...props}
                className={`${styles['dashboard-table']} h-full w-full text-left`}
            />
        </section>
    )
}

export default DashboardTable
