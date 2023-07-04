import React, { useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import SideBarIcon from '../shared/SideBarIcon';
import {MdWork} from 'react-icons/md'
import {BiSolidHappyAlt} from 'react-icons/bi'
import {DiCodeigniter} from 'react-icons/di'
import {FaLaptopCode} from 'react-icons/fa'

interface HamburgerMenuProps {
    active?:boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute flex flex-row justify-between items-start top-3 right-2 xs:block">
            <div className="x-4 py-2">
    <AiOutlineMenu
            className="text-green cursor-pointer"
             size={30}
             onClick={toggleMenu}
           />
        </div>
      {isMenuOpen && (
        <div className="bg-backgroundWork absolute top-0 right-0 flex flex-row-reverse">
          <a href='https://www.linkedin.com/in/ccolina03/' className="mx-4 my-auto"> <SideBarIcon icon={<BsLinkedin size = "40"/>}/> </a>
          <a href='#Carlos' className="mx-4 my-auto"> <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/> </a>
          <a href='#Carlos' className="mx-4 my-auto"> <SideBarIcon icon={<BiSolidHappyAlt size = "40"/>}/> </a>
          <a href="#work-experience1" className="mx-4 my-auto"><SideBarIcon icon={<MdWork size = "40"/>}/></a>
          <a href="#projects" className="mx-4 my-auto"> <SideBarIcon icon={<FaLaptopCode size = "40"/>}/> </a>
          <a className="mx-4 my-auto"> <SideBarIcon icon={<DiCodeigniter size = "40"/>}/> </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
