import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Table(props) {
  const [datatable, setDatatable] = useState(props.data);

  useEffect(() => {
    setDatatable(props.data);
  }, [props.data]);
  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25, 50, 100]}
      entries={20}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop={false}
      searchBottom={false}
      barReverse
    />
  );
}
