import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrl } from "../config.json";
import SearchBox from "./common/searchBox";
import Table from "./common/table";
import { getCarsList } from "../services/carService";
import { Link } from "react-router-dom";
const columns = [
  {
    label: "Image",
    field: "image",
  },
  {
    label: "Model",
    field: "title",
  },
  {
    label: "Brand",
    field: "brand",
  },
];
function Home(props) {
  const [query, setQuery] = useState("");
  const [dataNotFound, setDataNotFound] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tableData, setTableData] = useState({
    columns: [...columns],
    rows: [],
  });

  const addElement = (rowData) => {
    const rows = rowData.map((row) => {
      row.image = (
        <img
          src={apiUrl + row.image_url}
          className="align-self-end"
          alt="car"
          style={{ height: "100px" }}
        />
      );
      row.clickEvent = () => handleClick(row);

      return row;
    });
    return rows;
  };

  const handleClick = (row) => {
    props.history.push(`/single-car-details/${row._id}`);
  };
  const handleSearchQueryChange = (value) => {
    setQuery(value);

    const copyData = [...tableData.rows];
    if (value.length >= 3) {
      const searchedData = tableData.rows.filter((row) => {
        return row.brand.toLowerCase().startsWith(value);
      });
      if (searchedData.length) {
        setTableData((prevState) => ({
          ...prevState,
          ["rows"]: searchedData,
        }));
        setVisible(true);
        setDataNotFound(false);
      } else {
        setDataNotFound(true);
      }
    } else {
      setVisible(false);
      setTableData((prevState) => ({ ...prevState, ["rows"]: copyData }));
    }
  };

  const getTableData = async () => {
    try {
      const carsList = await getCarsList();
      const rows = addElement(carsList);
      setTableData((prevState) => ({ ...prevState, ["rows"]: rows }));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <div className="row">
      <ToastContainer />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <Link to="/add-new-car">
            <button className="btn btn-primary">Add New Car</button>
          </Link>
        </div>
      </div>
      <SearchBox value={query} onChange={handleSearchQueryChange} />
      {visible && <Table data={tableData} />}
      {dataNotFound && (
        <div className="text-center p-5">
          <strong>No Car Found</strong>
        </div>
      )}
    </div>
  );
}

export default Home;
