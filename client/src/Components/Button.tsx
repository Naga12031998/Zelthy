import { ReactElement } from "react";
import { ButtonProps } from "../types/index";

const Button = (props: ButtonProps): ReactElement => {
  const { text, onClick, primary } = props;

  return (
    <button
      type="button"
      className={primary ? "btn btn-primary" : "btn btn-outline-secondary"}
      onClick={(): void => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
