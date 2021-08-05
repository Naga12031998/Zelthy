import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Components/Spinner";
import { Details, userDetails } from "./types/index";
import Home from "./Components/Home";

const App = (): React.ReactElement => {
  const [userDetailsObject, setUserDetailsObject] = useState<Details>({});
  const [idArray, setIdArray] = useState<Array<number>>([]);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentEditId, setCurrentEditId] = useState<number>(0);
  const [apiCallSuccess, setApiCallSuccess] = useState<boolean>(false);

  // Open and close modal
  const toogleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const setUserDetails = (array: any): void => {
    const tempObj: Details = {};
    const tempArr: Array<number> = [];
    for (let i = 0; i < array.length; i++) {
      const details = {
        name: array[i].name,
        email: array[i].email,
        mobile: array[i].phone,
        website: array[i].website,
        image: `https://avatars.dicebear.com/v2/avataaars/${array[i].name}.svg?mood[]=happy`,
        id: array[i].id,
      };
      tempObj[array[i].id] = details;
      tempArr.push(array[i].id);
    }
    setUserDetailsObject(tempObj);
    setIdArray(tempArr);
    setApiCallSuccess(true);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserDetails(res.data);
    });
  }, []);

  // deleting the user from the DOM
  const deleteUser = (id: number): void => {
    const items = idArray.filter((item) => item !== id);
    setIdArray(items);
  };

  const onEditClick = (
    name: string,
    email: string,
    phone: string,
    website: string,
    id: number
  ): void => {
    setUserName(name);
    setEmail(email);
    setMobile(phone);
    setWebsite(website);
    setCurrentEditId(id);
    toogleModal();
  };

  // Editing the user details
  const onSubmit = (): void => {
    const tempObj: Details = userDetailsObject;

    const details: userDetails = {
      name: userName,
      email: email,
      mobile: mobile,
      website: website,
      id: currentEditId,
      image: `https://avatars.dicebear.com/v2/avataaars/${userName}.svg?mood[]=happy`,
    };
    tempObj[currentEditId] = details;

    setUserDetailsObject(tempObj);
  };

  if (!apiCallSuccess) {
    return <Spinner />;
  }

  return (
    <Home
      userDetails={userDetailsObject}
      idArray={idArray}
      deleteUser={deleteUser}
      onEditClick={onEditClick}
      isModalOpen={isModalOpen}
      toogleModal={toogleModal}
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
  );
};

export default App;
