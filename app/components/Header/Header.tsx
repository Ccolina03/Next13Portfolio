"use client"
import React, {useState, useEffect, FC} from 'react'
import Image from "next/image";
import CCIcon from '../../../public/cc.xlarge.png'
import SideBarIcon from "../shared/SideBarIcon";
import {AiOutlineGithub} from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs";
import {MdWork} from 'react-icons/md'
import {BiSolidHappyAlt} from 'react-icons/bi'
import {DiCodeigniter} from 'react-icons/di'
import {FaLaptopCode} from 'react-icons/fa'
import '../../globals.css'
import HeaderBg from "./HeaderBg";
import Banner from "./Banner";
import Carlos from "./Carlos";
import HamburgerMenu from './HamburgerMenu';

const getHamburger = (screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
    switch (screenSize) {
      case 'xs': 
            return 'xs'
      case 'lg':
      case 'xl':
      case 'sm':
      case 'xs':
      default:
        return 'sm';
    }
  };

const Header: FC = () => {
    const [screenSize, setScreenSize] = React.useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('lg');
    const hamburgerCard = getHamburger(screenSize);
    React.useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1280) {
          setScreenSize('xl');
        } else if (screenWidth >= 1024) {
          setScreenSize('lg');
        } else if (screenWidth >= 768) {
          setScreenSize('md');
        } else if (screenWidth >= 640) {
          setScreenSize('sm');
        } else {
          setScreenSize('xs');
        }
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (hamburgerCard === 'xs') {
        return(
            <header className="w-full gap-16 mx-auto">
            <div className="gap-x-2 flex-row flex">
                <HamburgerMenu/>
            </div>
            <div className="lg:flex-row md:flex-row flex sm:flex-col xs:flex-col text-white xs:mt-20">
                 <HeaderBg/>
                  <Banner/>
                  <Carlos noShowSm={true}/>
            </div>
            </header>
        ) 
    } else {
    return (
        <header className="w-full gap-16 mx-auto">
            <div className="gap-x-8 flex-row flex">
                <div className="my-auto mx-2">
                    <Image src={CCIcon} alt="Carlos Colina Icon" height={30} width={40} />
                </div>
                <div className="flex mt-1 text-white lg:mt-2 xl:mt-3">
                    <a href='#Carlos' className="mx-4 my-auto"> <SideBarIcon icon={<BiSolidHappyAlt size = "40"/>}/> </a>
                    <a href="#work-experience1" className="mx-6 my-auto"><SideBarIcon icon={<MdWork size = "40"/>}/></a>
                    <a href="#projects" className="mx-6 my-auto"> <SideBarIcon icon={<FaLaptopCode size = "40"/>}/> </a>
                    <a className="mx-6 my-auto"> <SideBarIcon icon={<DiCodeigniter size = "40"/>}/> </a>
                </div>
                <div className="absolute gap-x-5 mt-1 flex lg:flex-row md:flex-row xl:flex-row xl:top-0 xl:right-15 lg:top-0 lg:right-15 md:top-0 md:right-5 xs:flex-col xs:top-[4.2rem] xs:right-[1.5rem] sm:top-0 sm:right-5 sm:flex-row lg:mt-2 xl:mt-3">
                    <a className="my-auto"> <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/></a>
                    <a className="my-auto "><SideBarIcon icon={<BsLinkedin size = "40"/>}/></a>
                </div>
            </div>
            
            <div className="lg:flex-row md:flex-row flex sm:flex-col xs:flex-col text-white lg:mt-16 xl:mt-16">
                 <HeaderBg/>
                  <Banner/>
                  <Carlos noShowSm={true}/>
            </div>
        </header>
    )
    }
}

export default Header;