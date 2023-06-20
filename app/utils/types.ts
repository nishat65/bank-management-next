export type IUser = {
    id: number | string
    email: string
    first_name: string | null
    last_name: string | null
    date_joined: Date | string
    role: string
}

export type ILoans = {
    id: number
    customer: {
        id: number
        email: string
        first_name: string | null
        last_name: string | null
        date_joined: Date | string
        role: string
    }
    amount: string | number
    status: string
    manager: {
        first_name: string | null
        last_name: string | null
        role: string | null
    }
    agent: {
        id: number
        email: string
        first_name: string | null
        last_name: string | null
        date_joined: string | Date
    }
}
