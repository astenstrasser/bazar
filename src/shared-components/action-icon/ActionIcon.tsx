import React from "react";
import { Icon } from "../types";
import "./ActionIcon.css";
import LeftArrow from "../../assets/left-arrow.svg";
import PlusIcon from "../../assets/plus.svg";

function ActionIcon(props: {
  onClick: () => void;
  type: Icon;
  alt: string;
}): React.ReactElement {
  function getIcon() {
    switch (props.type) {
      case Icon.LeftArrow:
        return LeftArrow;
      case Icon.Plus:
        return PlusIcon;
    }
  }
  return (
    <a onClick={props.onClick}>
      <img className="action-icon" src={getIcon()} alt={props.alt} />
    </a>
  );
}

export default ActionIcon;
