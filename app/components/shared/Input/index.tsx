interface IProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
}

function Input(props: IProps) {
    const { className, ...rest } = props
    return (
        <input
            className={`h-20 w-full rounded-3xl border-2 border-emerald-700 text-3xl p-3 ${className}`}
            {...rest}
        />
    )
}

export default Input
