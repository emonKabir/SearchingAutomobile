import React, { useEffect, useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { getSingleCar } from "../services/carService";
import { apiUrl } from "../config.json";
function SingleCarDetails(props) {
  const [carDetails, setCarDetails] = useState([]);
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
      {" "}
      <div className="container">
        <Card>
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
    </div>
  );
}

export default SingleCarDetails;
