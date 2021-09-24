import React from "react";

function ActionIcon(props: {
  onClick: () => void;
  src: any;
  alt: string;
}): React.ReactElement {
  return (
    <a onClick={props.onClick}>
      <img className="action-icon" src={props.src} alt={props.alt} />
    </a>
  );
}

export default ActionIcon;
