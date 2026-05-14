import "./FormField.css";

export default function FormField({
  id,
  label,
  type = "text",
  as = "input",
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 5,
  autoComplete
}) {
  const Field = as;

  return (
    <div className={`field ${error ? "field--error" : ""}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required && <span aria-hidden="true" className="field__required">*</span>}
      </label>

      <Field
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field__control ${as === "textarea" ? "field__control--textarea" : ""}`}
      />

      {error && (
        <p id={`${id}-error`} className="field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
