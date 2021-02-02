import React, { useState, useEffect } from "react";

function TextArea(props) {
  const [inputName] = useState(props.name);
  const [label] = useState(props.label);
  const [placeholder] = useState(props.placeHolder);
  const [value, setValue] = useState(props.value);

  function handleChange(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    if (props.onChange) {
      props.onChange(inputName, value);
    }
  }, [inputName, value]);

  return (
    <div className="form-group row">
      <label htmlFor={inputName}>{label}</label>
      <div className="col-lg-12 col-xl-12">
        <textarea
          className="form-control description"
          rows="6"
          placeholder="Enter  Details..."
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default TextArea;
