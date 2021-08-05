import { ReactElement } from "react";
import { InputProps } from "../types/index";

const Input = (props: InputProps): ReactElement => {
  // extracting data  from props
  const { handleChange, text, placeHolder, label } = props;

  return (
    <div className="row m-3">
      <div className="col-lg-3 col-md-3" />
      <div className="col-lg-2 col-md-2">
        <p>
          <span className="likeColorStyle">*</span>
          {`${label}: `}
        </p>
      </div>
      <div className="col-lg-7 col-md-7">
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          placeholder={`${placeHolder}...`}
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
