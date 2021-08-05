import { ChangeEventHandler } from "react";

export type userDetails = {
  name: string;
  email: string;
  mobile: string;
  website: string;
  image: string;
  id: number;
};

export type Details = {
  [key: string]: userDetails;
};

export type ButtonProps = {
  text: string;
  onClick: Function;
  // optional props
  primary?: boolean;
};

export type CardProps = {
  image: string;
  email: string;
  mobile: string;
  name: string;
  website: string;
  deleteUser: Function;
  id: number;
  onEditClick: Function;
};

export type CardFooterProps = {
  isLiked: boolean;
  toggleLike: Function;
  deleteUser: Function;
  id: number;
  onEditClick: Function;
};

export type HomeProps = {
  userDetails: Details;
  idArray: Array<number>;
  deleteUser: Function;
  onEditClick: Function;
  isModalOpen: boolean;
  toogleModal: Function;
  setUserName: Function;
  setEmail: Function;
  setWebsite: Function;
  setMobile: Function;
  userName: string;
  email: string;
  website: string;
  mobile: string;
  onSubmit: Function;
};

export type InputProps = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  text: string;
  placeHolder: string;
  label: string;
};

export type ListComponentProps = {
  iconName: string;
  text: string;
};

export type ModalProps = {
  isModalOpen: boolean;
  onRequestClose: Function;
  setUserName: Function;
  setEmail: Function;
  setWebsite: Function;
  setMobile: Function;
  userName: string;
  email: string;
  website: string;
  mobile: string;
  onSubmit: Function;
};
