import { useState, useEffect } from 'react'
import Input from './Input'
import * as emailjs from 'emailjs-com'

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

        const serviceID = process.env.REACT_APP_SERVICE_ID
        const templateId = process.env.REACT_APP_TEMPLATE_ID
        const userID = process.env.REACT_APP_USER_ID

        emailjs.send(
            serviceID,
            templateId,
            formData,
            userID
        ).then(res => {
            setFormData({
                'name': '',
                'email': '',
                'website': '',
                'content': ''
            })
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div className="contact">
            <h1>Contact</h1>
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
                {/* <Input
                    _type='textarea'
                    _placeholder='What can I do for you?'
                    _name='content'
                    _changeHandler={changeHandler}
                    _value={formData.content}
                /> */}
                <textarea
                    placeholder='What can I do for you?'
                    name='content'
                    value={formData.content}
                    onChange={({ target: { value } }) => changeHandler('content', value)}
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