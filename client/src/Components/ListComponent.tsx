import React from "react";
import { ListComponentProps } from "../types/index";

const ListComponent = (props: ListComponentProps): React.ReactElement => {
  const { iconName, text } = props;
  return (
    <div className="d-flex flex-row">
      <div className="material-icons iconcolor">{iconName}</div>
      <div className="ms-2">{text}</div>
    </div>
  );
};

export default ListComponent;
