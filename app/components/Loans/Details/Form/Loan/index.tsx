import { commonColor } from '@/app/utils/constant'

const { primary } = commonColor

function LoanFormView(props: { data: any }) {
    const { data } = props
    return (
        <section>
            <div className={`mt-4 font-light text-2xl text-${primary}`}>Loan</div>
            <div className='flex gap-4 text-2xl mt-4'>
                <div>
                    <ul>
                        <li>Id</li>
                        <li>Amount</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className='grow'>
                    <ul>
                        <li>{data?.id || ''}</li>
                        <li>{data?.status || ''}</li>
                        <li>{data?.amount || ''}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LoanFormView