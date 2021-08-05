import { ReactElement, ChangeEvent } from "react";
import { Modal } from "react-bootstrap";
import Input from "./Input";
import Button from "./Button";
import { ModalProps } from "../types/index";

const ReactModal = (props: ModalProps): ReactElement => {
  const {
    isModalOpen,
    onRequestClose,
    setUserName,
    setEmail,
    setWebsite,
    setMobile,
    userName,
    email,
    website,
    mobile,
    onSubmit,
  } = props;

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isModalOpen}
      onHide={(): void => {
        onRequestClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Basic Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          handleChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setUserName(event.target.value)
          }
          text={userName}
          label="Name"
          placeHolder="Enter your Name"
        />
        <Input
          handleChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setEmail(event.target.value)
          }
          text={email}
          label="Email"
          placeHolder="Enter your Email"
        />
        <Input
          handleChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setMobile(event.target.value)
          }
          text={mobile}
          label="Phone"
          placeHolder="Enter your Phone"
        />
        <Input
          handleChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setWebsite(event.target.value)
          }
          text={website}
          label="Website"
          placeHolder="Enter your Website"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button text="Cancel" onClick={onRequestClose} />
        <Button
          text="Ok"
          onClick={() => {
            onSubmit();
            onRequestClose();
          }}
          primary
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ReactModal;
