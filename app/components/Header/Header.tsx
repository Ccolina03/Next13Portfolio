"use client"
import Image from "next/image";
import CCIcon from '../../../public/cc.xlarge.png'
import SideBarIcon from "../shared/SideBarIcon";
import Carlos from "../../../public/Screenshot_20230125_115845.png"
import {AiOutlineGithub} from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs";
import {MdWork} from 'react-icons/md'
import {BiSolidHappyAlt} from 'react-icons/bi'
import {DiCodeigniter} from 'react-icons/di'
import {FaLaptopCode} from 'react-icons/fa'
import * as React from 'react'
import '../../globals.css'

const getBackground = (screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
    switch (screenSize) {
      case 'md':
          return `background`
      case 'lg':
          return `background`
      case 'xl':
        return `background`
      case 'sm':
      case 'xs':
      default:
        return `backgroundMobile`;
    }
  };


const Header = () => {
  const [screenSize, setScreenSize] = React.useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('lg');
  const backgroundDefault = getBackground(screenSize);
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
    return (
        <header className="w-full mx-auto relative overflow-visible s">
            <div className={`${backgroundDefault} h-96 w-full`}>
            <div className="gap-x-8 flex-row flex">
                <div className="my-auto mx-2">
                    <Image src={CCIcon} alt="Carlos Colina Icon" height={40} width={50}/>
                </div>
                <div className="flex mt-1  text-white">
                    <a className="mx-4 my-auto"> <SideBarIcon icon={<BiSolidHappyAlt size = "40"/>}/> </a>
                    <a className="mx-6 my-auto"><SideBarIcon icon={<MdWork size = "40"/>}/></a>
                    <a className="mx-6 my-auto"> <SideBarIcon icon={<FaLaptopCode size = "40"/>}/> </a>
                    <a className="mx-6 my-auto"> <SideBarIcon icon={<DiCodeigniter size = "40"/>}/> </a>
                </div>
                <div className="absolute gap-x-5 mt-1 flex top-0 right-5 ">
                    <a className="my-auto"> <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/></a>
                    <a className="my-auto "><SideBarIcon icon={<BsLinkedin size = "40"/>}/></a>
                </div>
            </div>
            <div className="carlos flex text-white">
                <div className="flex-col">
                    <div className="nombre">nombre</div>
                    <div className="subtitulo1">sub1</div>
                </div>
                <div className="flex items-end absolute carlos">
                    <Image className="rounded-xl" src={Carlos} alt="Carlitos Colina" width={250} height={210}/>
                </div>
            </div>
            <div className="text-white">
                Button for something
            </div>
            </div>
        </header>
    )
}

export default Header;