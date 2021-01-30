function Input({ _type, _placeholder, _name, _changeHandler, _value, _errors }) {

    return (
        <div className='inputDiv'>
            <input
                type={_type}
                placeholder={_placeholder}
                name={_name}
                value={_value}
                onChange={({ target: { value } }) => _changeHandler(_name, value)}
                className={_errors && 'error'}
            />
            <p>{_errors}</p>
        </div>
    )
}

export default Input