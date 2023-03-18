import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList =[
  "All",
  ...new Set(Menu.map((currElem)=>{
    return currElem.category
  })),
] 



const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);


  const filteritem=(category)=> {
if(category==="All"){
  setMenuData(Menu);
  return
}

  const updatedList= Menu.filter((currElem)=>{
    return currElem.category===category;

  });

  setMenuData(updatedList);
};

  return (
    <>

    <Navbar filteritem={filteritem}  menuList={menuList}/>
      
      <MenuCard menuData={ menuData }/>
    </>
  );
};

export default Resturant;