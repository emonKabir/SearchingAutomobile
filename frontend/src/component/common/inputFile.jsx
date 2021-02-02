import React, { useState, useEffect } from "react";

function InputFile(props) {
  const [inputName] = useState(props.name);
  const [inputType] = useState(props.type);
  const [label] = useState(props.label);
  const [placeholder] = useState(props.placeHolder);
  const [value, setValue] = useState([]);
  function handleChange(event) {
    setValue(event.target.files[0]);
  }

  useEffect(() => {
    if (props.onChange) {
      props.onChange(inputName, value);
    }
  }, [inputName, value]);
  return (
    <>
      <div className="form-group row">
        <label htmlFor={inputName}>{label}</label>
        <div>
          <input
            className="form-control "
            type={inputType}
            name={inputName}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
export default InputFile;
