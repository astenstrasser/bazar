import React from "react";
import { Icon } from "../types";
import LeftArrow from "../../assets/left-arrow.svg";
import LoginIcon from "../../assets/login-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";
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
      case Icon.Login:
        return LoginIcon;
      case Icon.Logout:
        return LogoutIcon;
    }
  }
  return (
    <a onClick={props.onClick}>
      <img className="action-icon" src={getIcon()} alt={props.alt} />
    </a>
  );
}

export default ActionIcon;
