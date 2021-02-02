import React, { useEffect, useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSingleCar, deleteCarInfo } from "../services/carService";
import { apiUrl } from "../config.json";
import DeleteModal from "./common/deleteModal";
function SingleCarDetails(props) {
  const [carDetails, setCarDetails] = useState([]);
  const [onDelete, setOnDelete] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    setOnDelete(true);
    toggle();
  };

  const handleEdit = () => {};
  const deleteContent = async () => {
    try {
      await deleteCarInfo(carDetails._id);
      props.history.replace("/");
      toast.info("deleted successfully !");
      toggle();
    } catch (error) {
      toast.error("Something went wrong !");
    }
  };
  async function getSingleCarDetils(id) {
    try {
      const carDetails = await getSingleCar(id);
      setCarDetails(carDetails);
    } catch (error) {
      toast.error("Something went wrong !");
    }
  }
  useEffect(() => {
    getSingleCarDetils(props.match.params.id);
  }, []);
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <Card>
          <div className=" btn-group  mx-auto">
            <button className="btn btn-primary m-1" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger m-1" onClick={handleDelete}>
              Delete
            </button>
          </div>

          <div className="d-flex justify-content-center m-3">
            <ReactRoundedImage
              image={`${apiUrl}${carDetails?.image_url}`}
              roundedColor="#ffffff"
              imageWidth="200"
              imageHeight="200"
              roundedSize="1"
            />
          </div>
          <CardBody>
            <CardTitle
              tag="h4"
              className="d-flex justify-content-center"
            >{`${carDetails?.title} `}</CardTitle>
            <CardTitle
              tag="h4"
              className="d-flex justify-content-center"
            >{`${carDetails?.brand} `}</CardTitle>
            <CardSubtitle
              tag="h6"
              className="mb-2 text-muted d-flex justify-content-center"
            >
              {carDetails?.details}
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
      {onDelete && (
        <DeleteModal
          modalTitle="Delete Record"
          toggle={toggle}
          modal={modal}
          handleClick={deleteContent}
        />
      )}
    </div>
  );
}

export default SingleCarDetails;
