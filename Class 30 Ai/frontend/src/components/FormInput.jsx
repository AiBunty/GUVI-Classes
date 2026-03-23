export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required = true,
  inputProps = {},
}) {
  return (
    <div>
      {/* The label keeps each uncontrolled input accessible. */}
      <label className="form-label" htmlFor={name}>
        {label}
      </label>

      {/* Inputs stay uncontrolled because they do not bind their value to React state. */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="form-input"
        {...inputProps}
      />

      {/* Render validation feedback only when an error exists. */}
      {error ? <p className="form-error">{error}</p> : null}
    </div>
  );
}

