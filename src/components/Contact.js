import { useState } from 'react'
import Input from './Input'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
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
                    placeholder='Name'
                    name='name'
                    changeHandler={changeHandler}
                    value={formData.name}
                />
                <Input
                    type='email'
                    placeholder='Email Address *'
                    name='email'
                    changeHandler={changeHandler}
                    value={formData.email}
                />
                <Input
                    placeholder='Website'
                    name='website'
                    changeHandler={changeHandler}
                    value={formData.website}
                />
                <Input
                    type='textarea'
                    placeholder='What can I do for you?'
                    name='content'
                    changeHandler={changeHandler}
                    value={formData.content}
                />
                <Input
                    type='submit'
                    name='submit'
                />

            </form>
        </div>
    )
}

export default Contact