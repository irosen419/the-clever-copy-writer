import { useState } from 'react'
import Input from './Input'

function Contact() {

    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'website': '',
        'content': ''
    })

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
                    _type='text'
                    _placeholder='Name'
                    _name='name'
                    _changeHandler={changeHandler}
                    _value={formData.name}
                />
                <Input
                    _type='email'
                    _placeholder='Email Address *'
                    _name='email'
                    _changeHandler={changeHandler}
                    _value={formData.email}
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
                    _name='submit'
                />

            </form>
        </div>
    )
}

export default Contact