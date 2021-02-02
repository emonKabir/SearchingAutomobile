import React from "react";
import ModalForm from "../common/modal";
function DeleteModal(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <ModalForm
      modalTitle={props.modalTitle}
      toggle={props.toggle}
      modal={props.modal}
      btnName="Delete"
      handleClick={handleClick}
    >
      <div>Are you sure you want to delete this?</div>
    </ModalForm>
  );
}

export default DeleteModal;
