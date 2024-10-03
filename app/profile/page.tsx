/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/Profile/Profile"
import { useSelector } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const page: FC<Props> = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react-hooks/rules-of-hooks
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {user} = useSelector((state:any) => state.auth);

  return (
    <div>
      <Protected>
        <Heading
          title={`${user?.name} profile `}
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming,MERN,Redux,Machnine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user}/>
      </Protected>
    </div>

  );
};

export default page;
