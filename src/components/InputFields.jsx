import React from "react";
const InputFields = ({
  type,
  label,
  value,
  name,
  placeholder,
  required,
  validate,
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
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
      />
      <div className="label">
        {label}
        <span style={ValidateColor} className="ps-0">
          {validate}
        </span>
      </div>
    </div>
  );
};

export default InputFields;
