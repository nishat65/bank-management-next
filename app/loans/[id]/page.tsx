// import { useParams } from 'next/navigation'
import DetailPage from '@/app/components/Loans/Details'

function Id({ params }: { params: { id: string } }) {
    const { id } = params
    return <DetailPage />
}

export default Id
