function Input({ _type, _placeholder, _name, _changeHandler, _value, _errors, _disable }) {

    return (
        <div className='inputDiv'>
            <input
                id={_name}
                type={_type}
                placeholder={_placeholder}
                name={_name}
                value={_value}
                onChange={({ target: { value } }) => _changeHandler(_name, value)}
                className={_errors && 'error'}
                disabled={_name === 'submit' && _disable}
            />
            <p>{_errors}</p>
        </div>
    )
}

export default Input