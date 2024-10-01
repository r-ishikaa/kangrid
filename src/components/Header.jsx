import {useLocation} from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import { kangrid} from "../assets";
import Button from "./Button" ;
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { handle } from "express/lib/router";

const Header = () => {
    const pathname=useLocation();
    const [openNavigation, setOpenNavigation] = useState(true);
    const toggleNavigation = () => {
        if (openNavigation) {
          setOpenNavigation(false);
          enablePageScroll();
        } else {
          setOpenNavigation(true);
          disablePageScroll();
        }
      };
    
      const handleClick = () => {
        if (!openNavigation) return;
    
        enablePageScroll();
        setOpenNavigation(false);
      };
  return ( 
  <div className={`fixed top-0 left-0 w-full z-50 border-n-6
   lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrrop blur-sm'}`}>
    <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
     <a className="block w-[2rem] xl:mr-2" href="#hero">
        <img src={kangrid} className="w-[300px] mt-2 h-auto" alt="KanGrid"/>
      </a>
      <h1 className="text-2xl font-sora font-semibold text-n-1 mt-2 mb-5 mr-15">KanGrid</h1>
    <nav className={`${openNavigation ? 'flex' : 'hidden' } hidden fixed top-[5rem] left-0 right-0
     bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
       <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
          {navigation.map((item)=>(
            <a key={item.id} href={item.url}
            onClick={handleClick}
            className={`block relative font-code text-2xl uppercase text-n-1
             transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden':""
             } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${ item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50" } lg:leading-5 
             lg:hover:text-n-1 xl:px-12`}>
            {item.title}
            </a>

         ))}
        </div>    
        <HamburgerMenu />       
        </nav>
        <a href="#signup" className="button hidden mr-8 mt-8 ml-20 text-n-1/50 transition-colors hover:text-n-1 lg:block">
          New Account
       </a>
       <Button className="hidden lg:flex mt-5 ml-0 " href="#login">
         Sign Up
       </Button>
       <Button className="ml-auto lg:hidden" px="px=3" onClick={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
       </Button>
     
    </div>
   </div>
  );
};
export default Header;
