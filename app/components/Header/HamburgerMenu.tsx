import * as React from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute flex flex-row justify-between items-start top-3 right-5 xs:block">
            <div className="x-4 py-2">
    <AiOutlineMenu
            className="text-green cursor-pointer"
             size={50}
             onClick={toggleMenu}
           />
        </div>
      {isMenuOpen && (
        <div ref={menuRef} className="bg-backgroundWork absolute top-0 right-0 flex flex-row-reverse">
          <a href='https://www.linkedin.com/in/ccolina03/' className="xs:mx-2 mx-4 my-auto"> <SideBarIcon icon={<BsLinkedin size = "40"/>}/> </a>
          <a href='https://github.com/Ccolina03' className="xs:mx-2 mx-4 my-auto"> <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/> </a>
          <a href='#Carlos' className="xs:mr-10 mx-4 my-auto"> <SideBarIcon icon={<BiSolidHappyAlt size = "40"/>}/> </a>
          <a href="#work-experience1" className="xs:mx-2 my-auto"><SideBarIcon icon={<MdWork size = "40"/>}/></a>
          <a href="#projects" className="xs:mx-2 mx-4 my-auto"> <SideBarIcon icon={<FaLaptopCode size = "40"/>}/> </a>
          <a className="xs:mx-2 mx-4 my-auto"> <SideBarIcon icon={<DiCodeigniter size = "40"/>}/> </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
