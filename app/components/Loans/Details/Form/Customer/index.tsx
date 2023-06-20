import { commonColor } from '@/app/utils/constant'

const { primary } = commonColor

function CustomerFormView(props: { data: any }) {
    const { data } = props
    return (
        <section>
            <div className={`mt-4 font-normal text-xl text-${primary}`}>Customer</div>
            <div className='flex gap-4 text-2xl mt-4'>
                <div>
                    <ul>
                        <li>Email</li>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>Date Joined</li>
                    </ul>
                </div>
                <div className='grow'>
                    <ul>
                        <li>{data?.customer.email || ''}</li>
                        <li>{data?.customer.first_name || ''}</li>
                        <li>{data?.customer.last_name || ''}</li>
                        <li>{data?.customer.date_joined || ''}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CustomerFormView