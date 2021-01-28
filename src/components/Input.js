const Input = ({ _type, _placeholder, _name, _changeHandler, _value }) =>

(
    <input
        type={_type}
        placeholder={_placeholder}
        name={_name}
        value={_value}
        onChange={({ target: { value } }) => _changeHandler(_name, value)} />
)

export default Input