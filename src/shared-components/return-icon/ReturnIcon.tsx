import React from "react";
import ArrowIcon from "../../assets/left-arrow.svg";
import "./ReturnIcon.css";

function ReturnIcon(props: { reference: string }): React.ReactElement {
  return (
    <div className="return-icon--container">
      <a href={props.reference} className="return-icon">
        <img src={ArrowIcon} alt="Retornar à página anterior" />
        Voltar
      </a>
    </div>
  );
}

export default ReturnIcon;
