import { ChangeEvent, useState } from 'react'

interface IProps {
    initialValues: any
    api?: CallableFunction | null
}

type FormValues = Record<string, any>

function useForm(props: IProps) {
    const { api, initialValues } = props
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState<Record<string, string>>({})

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const { value, name } = e.target
        setErrors((prevValues: Record<string, string>) => ({
            ...prevValues,
            [name]: '',
        }))
        setValues((prevValues: FormValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    function validateForm(): boolean {
        const validationErrors: Record<string, string> = {}
        if (
            !values.email.trim().length ||
            !values.email.match(/^\S+@\S+\.\S+$/)
        ) {
            validationErrors.email = 'Invalid email address'
        }
        if (!values.password.trim().length) {
            validationErrors.password = 'Invalid Password'
        }
        if (values.name && !values.name.trim().length) {
            validationErrors.name = 'Name is required'
        }
        setErrors(validationErrors)
        return Object.keys(validationErrors).length === 0
    }

    async function handleSubmit(): Promise<any> {
        if (!validateForm()) return
        if (api && typeof api === 'function') {
            try {
                const response = await api()
                return response
            } catch (error) {
                throw new Error('API request failed')
            }
        }
    }

    return [values, errors, handleChange, handleSubmit]
}

export default useForm
