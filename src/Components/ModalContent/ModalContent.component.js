import React from "react";

import "./ModalContent.styles.css";

export const Modalcontent = (props) => {
  const modalData = props.modalData;
  return (
    <div class="grid-container">
      <div class="grid-item">
        <img src={modalData.image} style={{ width: "17rem" }} />
      </div>
      <div class="grid-item sansserif" style={{ textAlign: "left" }}>
        <div>NAME</div>
        <div>LABEL</div>
        <div>CATEGORY</div>
        <div>PRICE</div>
        <div>DESCRIPTION</div>
      </div>
      <div className="grid-item sansserif" style={{ textAlign: "left" }}>
        <div>: {modalData.name}</div>
        <div>: {modalData.label}</div>
        <div>: {modalData.category}</div>
        <div>: $ {modalData.price}</div>
        <div>: {modalData.description}</div>
      </div>
    </div>
  );
};
