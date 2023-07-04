import React,{FC} from 'react'
import Carlitos from '../../../public/Screenshot_20230125_115845.png'
import Image from 'next/image';

export interface CarlosProps {
    noShowSm?: boolean;
}

const getCarlos = (noShowSm: Pick<CarlosProps, 'noShowSm' >['noShowSm']):string => {
    switch (noShowSm) {
        case true:
            return 'flex-shrink-0 w-50 h-80 items-center m-16 xs:mt-6'
        case false:
            return 'lg:flex-shrink'
        default:
            return 'flex-shrink-0 w-50 h-80 items-center m-16 xs:mt-6'
    }

}


const Carlos: FC<CarlosProps> = (
    {
        noShowSm,
    }
) => {
    return (
        <div className={`flex justify-center ${getCarlos(noShowSm)}`}>
            <Image className="object-contain rounded-lg w-full h-full" src={Carlitos} alt="Carlos Picture"></Image>
        </div>
    )
}

export default Carlos;