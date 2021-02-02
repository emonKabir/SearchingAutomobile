import React, { useState, useEffect } from "react";

function FormInput(props) {
  const [inputName] = useState(props.name);
  const [inputType] = useState(props.type);
  const [label] = useState(props.label);
  const [placeholder] = useState(props.placeHolder);
  const [value, setValue] = useState(props.inputDefaultValue);
  function handleChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (props.onChange) {
      props.onChange(inputName, value);
    }
  }, [inputName, value]);

  useEffect(() => {
    setValue(props.inputDefaultValue);
  }, [props.inputDefaultValue]);
  return (
    <>
      <div className="form-group">
        <label htmlFor={inputName}>{label}</label>
        <div className="col-lg-12 col-xl-12">
          <input
            className="form-control form-control-lg form-control-solid"
            type={inputType}
            name={inputName}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
export default FormInput;
