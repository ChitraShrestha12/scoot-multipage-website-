import React from "react";

function InputField({ name, type,value, placeholder, onChange, error }) {
  return (
    <div className="input-field">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="error-msg">{error}</p>
    </div>
  );
}

export default InputField;
