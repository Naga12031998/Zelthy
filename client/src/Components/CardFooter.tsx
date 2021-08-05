import React from "react";
import { CardFooterProps } from "../types/index";
import "../App.css";

const CardFooter = (props: CardFooterProps): React.ReactElement => {
  const { toggleLike, isLiked, deleteUser, id, onEditClick } = props;

  return (
    <div className="card-header d-flex flex-row justify-content-between">
      {isLiked ? (
        <span
          className="material-icons cursorStyle likeColorStyle"
          onClick={() => toggleLike()}
        >
          favorite
        </span>
      ) : (
        <span
          className="material-icons cursorStyle likeColorStyle"
          onClick={() => toggleLike()}
        >
          favorite_border
        </span>
      )}
      <span
        className="material-icons cursorStyle iconcolor"
        onClick={(): void => onEditClick()}
      >
        border_color
      </span>
      <span
        className="material-icons cursorStyle iconcolor"
        onClick={(): void => {
          deleteUser(id);
        }}
      >
        delete
      </span>
    </div>
  );
};

export default CardFooter;
