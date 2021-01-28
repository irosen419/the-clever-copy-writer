import { useState } from 'react'

function Input({ type = 'text', placeholder = '', name = '', changeHandler = null, value = null }) {

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={({ target: { value } }) => changeHandler(name, value)} />
    )
}

export default Input