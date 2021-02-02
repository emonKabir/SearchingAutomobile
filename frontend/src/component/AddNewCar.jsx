import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postCarsList } from "../services/carService";
import Input from "../component/common/input";
import TextArea from "../component/common/textarea";
import InputFile from "./common/inputFile";
const initValue = {
  title: "",
  brand: "",
  details: "",
  image: "",
};
function AddNewCar(props) {
  const [value, setValue] = useState(initValue);
  const handleChange = (name, value) => {
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleValidation = () => {
    if (!value.title || !value.brand || !value.image) {
      toast.error("Field can't be empty");
      return false;
    }
    return true;
  };

  const handleFormData = () => {
    const data = new FormData();

    data.append("title", value.title);
    data.append("brand", value.brand);
    data.append("details", value.details);
    data.append("image", value.image);
    return data;
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!handleValidation()) return;
      const formData = handleFormData();
      const status = await postCarsList(formData);

      toast.success("New Car Added Successfully !");
      props.history.push(`/single-car-details/${status._id}`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <Card>
        <CardBody className="d-flex justify-content-center m-3">
          <form
            className="form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Input
              name="title"
              label="Title"
              type="text"
              value={value.title}
              onChange={handleChange}
            />
            <Input
              name="brand"
              label="Brand"
              type="text"
              value={value.brand}
              onChange={handleChange}
            />

            <TextArea
              name="details"
              label="Details"
              value={value.details}
              onChange={handleChange}
            />
            <InputFile
              name="image"
              label="Image"
              type="file"
              value={value.image}
              onChange={handleChange}
            />
            <div className="text-center">
              <button
                type="submit"
                className="form-group btn btn-primary mt-5 "
              >
                Submit
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddNewCar;
