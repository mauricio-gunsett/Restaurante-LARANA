import './Input.css';

const Input = (props) => {
  const {
    label,
    type = "text",
    name,
    options = {},
    register,
    className = "",
    error = false,
    readOnly = false,
  } = props;
   console.log()
  return (
    <fieldset className={`container px-5 ${className}`}>
      <input
        type={type}
        id={`${name}-input`}
        className={`form-control ${error ? "is-invalid" : ''} `}
        placeholder=""
        {...(register ? register(name, { ...options, readOnly }) : {})}
        readOnly={readOnly}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
    </fieldset>
  );
};

export default Input;
