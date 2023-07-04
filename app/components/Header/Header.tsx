'use client'
import React, {useState, useEffect} from 'react'
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

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
    return (
        <header className="w-full gap-16 mx-auto">
            <div className="gap-x-8 flex-row flex">
                <div className="my-auto mx-2">
                    <Image src={CCIcon} alt="Carlos Colina Icon" height={30} width={40} />
                </div>
                <div className="flex mt-1 text-white">
                    <a className="mx-4 my-auto"> <SideBarIcon icon={<BiSolidHappyAlt size = "40"/>}/> </a>
                    <a className="mx-6 my-auto"><SideBarIcon icon={<MdWork size = "40"/>}/></a>
                    <a className="mx-6 my-auto"> <SideBarIcon icon={<FaLaptopCode size = "40"/>}/> </a>
                    <a className="mx-6 my-auto"> <SideBarIcon icon={<DiCodeigniter size = "40"/>}/> </a>
                </div>
                <div className="absolute gap-x-5 mt-1 flex lg:flex-row md:flex-row xl:flex-row xl:top-0 xl:right-5 lg:top-0 lg:right-5 md:top-0 md:right-5 xs:flex-col xs:top-[4.2rem] xs:right-[1.5rem]">
                    <a className="my-auto"> <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/></a>
                    <a className="my-auto "><SideBarIcon icon={<BsLinkedin size = "40"/>}/></a>
                </div>
            </div>
            
            <div className="lg:flex-row md:flex-row flex sm:flex-col xs:flex-col text-white">
                 <HeaderBg/>
                  <Banner/>
                  <Carlos noShowSm={true}/>
            </div>
        </header>
    )
}

export default Header;