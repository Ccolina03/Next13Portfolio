import React,{FC} from 'react'
import Carlitos from '../../../public/Screenshot_20230125_115845.png'
import Image from 'next/image';
import Highlight from './Highlight';
import SideBarIcon from '../shared/SideBarIcon';
import {AiOutlineContacts} from 'react-icons/ai'

export interface CarlosProps {
    noShowSm?: boolean;
}

const getCarlos = (noShowSm: Pick<CarlosProps, 'noShowSm' >['noShowSm']):string => {
    switch (noShowSm) {
        case true:
            return 'flex-shrink-0 w-50 h-80 items-center m-2 xs:mt-6'
        case false:
            return 'lg:flex-shrink '
        default:
            return 'flex-shrink-0 w-50 h-80 items-center m-2 xs:mt-6'
    }

}


const Carlos: FC<CarlosProps> = (
    {
        noShowSm,
    }
) => {
    return (
        <div className={`flex flex-col gap-5 ${getCarlos(noShowSm)}`}>
            <Image className="object-contain rounded-lg w-full h-full" src={Carlitos} alt="Carlos Picture"></Image>
            <button
                    type="button"
                    onClick={()=>{}}
                    className="xs:w-[70vw] sm:w-[50vw] lg:w-[33vw] xl:w-[23vw] p-0.5  hover:bg-gray-400  bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-3xl"
                  >
                    <a href='mailto:cmcolina@ualberta.ca' target='_blank'>
                    <div className="py-0 px-6 gap-1 bg-[#0E202D] rounded-3xl flex items-center justify-center">
                      <Highlight className="text-xl">Contact me</Highlight>
                      <div className=""> <SideBarIcon contact={true} icon={<AiOutlineContacts size = "40"/>}/></div>
                    </div>
                    </a>
                  </button>
        </div>
    )
}

export default Carlos;