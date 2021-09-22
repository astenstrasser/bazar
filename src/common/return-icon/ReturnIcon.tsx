import React from "react";
import ArrowIcon from "../../assets/left-arrow.svg";
import "./ReturnIcon.css";

function ReturnIcon(props: { reference: string }): React.ReactElement {
  return (
    <>
      <a href={props.reference} className="return-icon">
        <img src={ArrowIcon} alt="Seta para retornar à página anterior" />
        Voltar
      </a>
    </>
  );
}

export default ReturnIcon;
