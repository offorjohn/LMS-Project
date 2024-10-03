'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
 import Hero from "./components/Route/Hero";

 // eslint-disable-next-line @typescript-eslint/no-empty-object-type
 interface Props{}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
       <Heading
       title="ELearning"
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
       <Hero/>  
     
    </div>
  )
}

export default Page;