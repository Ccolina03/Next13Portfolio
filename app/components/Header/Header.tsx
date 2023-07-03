import Image from "next/image";
import CCIcon from '../../../public/cc.xlarge.png'
import SideBarIcon from "../shared/SideBarIcon";
import {AiOutlineGithub} from 'react-icons/ai'
import { BsLinkedin } from "react-icons/bs";
import {MdWork} from 'react-icons/md'
import {BiSolidHappyAlt} from 'react-icons/bi'
import {DiCodeigniter} from 'react-icons/di'
import {FaLaptopCode} from 'react-icons/fa'

const Header = () => {
    return (
        <header className="w-full mx-auto">
            <div className="relative gap-x-8 flex-row flex">
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
            <div className="flex text-white">
                <div className="flex-col">
                    <div className="nombre">nombre</div>
                    <div className="subtitulo1">sub1</div>
                </div>
                <div className="flex">
                    <Image/>
                </div>
            </div>
            <div className="text-white">
                Button for something
            </div>
        </header>
    )
}

export default Header;