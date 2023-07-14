"use client"
import React,{FC} from 'react';
import Image from 'next/image';
import {BsYoutube} from 'react-icons/bs'
import {DiGithubAlt} from 'react-icons/di';
import SideBarIcon from '../shared/SideBarIcon';
import '../../globals.css'

export interface CardProps {
    title: string,
    subtitle:string,
    hrefYT?:string,
    hrefGH?:string,
    picture?:any,
}

const Card:FC<CardProps> = ({
    title,
    subtitle,
    hrefYT,
    hrefGH,
    picture,
}) => {
    return (
    < div className="px-10 pb-24">
    <div className='flex flex-row w-full '>
        <div className='flex flex-col gap-10 gap-y-20 group cursor-pointer bg-gray-100 rounded-lg inset-0 border-gradient'> 
            <div className="relative h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out border-4 border-gradient">
                <Image src={picture} alt='UPrintI Screenshot' className='object-cover w-ful h-full object-left lg:object-center' />
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg p-6 flex justify-between'>
                    <div>
                        <p  className='font-bold text-xl'>{title}</p>
                        <p>{subtitle}</p>
                    </div>
                    <div className='flex flex-row  gap-y-2 gap-x-4 items-center'>
                    <a rel='noopener' target='_blank' href={hrefYT}><div><SideBarIcon className="rounded-lg"icon={<BsYoutube size = "40"/>}/></div></a>
                    <a rel='noopener' target='_blank' href={hrefGH}><div><SideBarIcon className="rounded-lg"icon={<DiGithubAlt size = "40"/>}/></div></a>
                    </div>

                </div>
            </div>

        </div>
        </div>
        </div>

    )
}

export default Card;