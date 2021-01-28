import { useState, useEffect } from 'react'
import Input from './Input'

function Contact() {

    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'website': '',
        'content': ''
    })

    const [errors, setErrors] = useState({
        'nameError': '',
        'emailError': ''
    })

    useEffect(() => {
        if (formData.name.length > 0 && formData.name.length < 2) {
            setErrors({ ...errors, nameError: 'Name must be at least 2 characters' })
        } else if (formData.name.length >= 2) {
            setErrors({ ...errors, nameError: '' })
        }
    }, [formData.name])

    useEffect(() => {
        if (formData.email.length > 0 && !formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/)) {
            setErrors({ ...errors, emailError: 'Please provide a valid email' })
        } else if (formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/)) {
            setErrors({ ...errors, emailError: '' })
        }
    }, [formData.email])

    const changeHandler = (name, input) => {
        setFormData({ ...formData, [name]: input })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="contact">
            <form onSubmit={submitHandler}>
                <Input
                    _placeholder='Name *'
                    _name='name'
                    _changeHandler={changeHandler}
                    _value={formData.name}
                    _errors={errors.nameError}
                />
                <Input
                    _placeholder='Email Address *'
                    _name='email'
                    _changeHandler={changeHandler}
                    _value={formData.email}
                    _errors={errors.emailError}
                />
                <Input
                    _placeholder='Website'
                    _name='website'
                    _changeHandler={changeHandler}
                    _value={formData.website}
                />
                <Input
                    _type='textarea'
                    _placeholder='What can I do for you?'
                    _name='content'
                    _changeHandler={changeHandler}
                    _value={formData.content}
                />
                <Input
                    _type='submit'
                    _value='Submit'
                />

            </form>
        </div>
    )
}

export default Contact