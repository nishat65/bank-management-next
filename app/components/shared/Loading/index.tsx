import React from 'react'

function Spinner() {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-white-900"></div>
        </div>
    )
}

export default Spinner
