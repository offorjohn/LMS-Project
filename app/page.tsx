'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";

// If Props from 'next/script' is unnecessary, you can remove it.
// If you need Props in the future, define its type properly, otherwise, remove it.
const Page: FC = () => {
  const [open, setOpen] = useState(false);
  // `setActiveItem` is currently unused, so you can either remove it or leave it for future use.
  const [activeItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="ELearning"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </div>
  );
};

export default Page;
