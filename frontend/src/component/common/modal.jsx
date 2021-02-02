import React from "react";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function ModalForm(props) {
  const [modalForm] = useState(props.form);

  const handleClick = () => {
    console.log("click from modal form");

    if (props.handleClick) {
      props.handleClick();
    }
  };
  return (
    <div>
      <Modal
        isOpen={props.modal}
        toggle={props.toggle}
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-mdf "
      >
        <ModalHeader className="modal-header">
          <h2 className="modal-title">{props.modalTitle}</h2>
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleClick}
            form={modalForm}
            type="submit"
          >
            {props.btnName}
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;
