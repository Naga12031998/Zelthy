import React from "react";
import Card from "./Card";
import ReactModal from "./Modal";
import { HomeProps } from "../types/index";

const Home = (props: HomeProps): React.ReactElement => {
  const {
    userDetails,
    idArray,
    deleteUser,
    onEditClick,
    isModalOpen,
    toogleModal,
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

  if (!idArray.length) {
    return (
      <div className="text-center">
        <h1>No data</h1>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {idArray.map((id: number) => {
          const details = userDetails[id];
          return (
            <div className="col-lg-3 col-sm-12 col-md-6" key={id}>
              <Card
                image={details.image}
                name={details.name}
                mobile={details.mobile}
                email={details.email}
                website={details.website}
                deleteUser={deleteUser}
                onEditClick={onEditClick}
                id={id}
              />
            </div>
          );
        })}
      </div>
      <ReactModal
        isModalOpen={isModalOpen}
        onRequestClose={toogleModal}
        setUserName={setUserName}
        setEmail={setEmail}
        setWebsite={setWebsite}
        setMobile={setMobile}
        userName={userName}
        email={email}
        website={website}
        mobile={mobile}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Home;
