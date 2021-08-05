import React, { useState } from "react";
import CardFooter from "./CardFooter";
import ListComponent from "./ListComponent";
import { CardProps } from "../types/index";
import "../App.css";

const Card = (props: CardProps): React.ReactElement => {
  const { image, email, mobile, name, website, deleteUser, id, onEditClick } =
    props;
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card mb-3 mt-3" style={{ width: "18rem" }}>
      <div className="image">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          width="180px"
          height="120px"
        />
      </div>
      <div className="card-body">
        <h6>{name}</h6>
        <ListComponent text={email} iconName="mail_outline" />
        <ListComponent text={mobile} iconName="phone_enabled" />
        <ListComponent text={website} iconName="language" />
      </div>
      <CardFooter
        isLiked={isLiked}
        toggleLike={toggleLike}
        onEditClick={() => {
          onEditClick(name, email, mobile, website, id);
        }}
        deleteUser={deleteUser}
        id={id}
      />
    </div>
  );
};

export default Card;
