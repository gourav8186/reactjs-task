import React from "react";
const InputFields = ({
  type,
  label,
  value,
  name,
  placeholder,
  validate,
  onChange,
  error,
}) => {
  const ValidateColor = {
    color: "red",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div className="inputBox">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="label">
        {label}
        <span style={ValidateColor} className="ps-0">
          {validate}
        </span>
      </div>
      <p>{error}</p>
    </div>
  );
};

export default InputFields;
