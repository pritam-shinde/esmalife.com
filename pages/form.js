import React, { useState } from 'react'

const form = () => {
    const [form, setForm] = useState({
        first: "",
        last: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(form),
        })
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="first" value={form.first} onChange={handleOnChange} />
                <input type="text" name="last" value={form.last} onChange={handleOnChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default form