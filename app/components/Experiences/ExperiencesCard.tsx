"use client"
import * as React from "react";
import Heading from '../shared/Heading';
import Image from 'next/image';
import '../../../app/globals.css'
import UAlberta from '../../../public/icon-ualberta.svg'

export interface ExperienceCardProps {
  inverse?: boolean;
  job: string;
  company: string;
  date: string;
  bullet1: string;
  bullet2?: string;
  bullet3?: string;
}

const getInverse = (inverse: boolean, screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
  switch (screenSize) {
    case 'md':
        return inverse ? 'jobinverse pl-16 py-8' : 'job1 px-10 py-8'
    case 'lg':
        return inverse ? 'jobinverse pl-12 py-8' : 'job1 px-10 py-8'
    case 'xl':
      return inverse ? 'jobinverse px-24 py-8' : 'job1 px-10 py-8';
    case 'sm':
    case 'xs':
    default:
      return 'job1 px-10 py-8';
  }
};

const getDatePosition = (inverse: boolean, screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => { 
  switch (screenSize) {
    case 'md':
        return inverse ? 'dateLeft md:w-[28vw] md:right-[20vw] lg:right-[20vw] xl:left-[20vw]' : 'dateRight md:w-[28vw] lg:w-[20vw] lg:left-[20vw] xl:right-[20vw]'
    case 'lg':
        return inverse ? 'dateLeft' : 'dateRight lg:left-[24vw] xl:right-[-20vw]'
    case 'xl':
      return inverse ? 'dateLeft' : 'dateRight';
    case 'sm':
    case 'xs':
    default:
      return inverse ? 'dateUnder w-[50vw] left-[-50vw]  xs:left-[-68vw] xs:top-[100vw] xs:w-[60vw]' : 'dateUnder w-[50vw] left-[-50vw] xs:left-[-68vw] xs:top-[100vw] xs:w-[60vw]';
  }
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  inverse,
  job = 'Dream Job',
  company = 'Shopify',
  date = '',
  bullet1,
  bullet2,
  bullet3,
}) => {
  const [screenSize, setScreenSize] = React.useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('lg');
  const inverseCard = getInverse(inverse || false, screenSize);
  const datePosition = getDatePosition(inverse || false, screenSize);
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
 
    if (screenSize == 'xs' || screenSize == "sm") {
      return (
        <div className="circle1 relative overflow-visible flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green">
         <div className={`${datePosition} absolute bottom-0 right-0`}>
          </div>
         <Image src={UAlberta} alt='Icon' />
          <div className={`${inverseCard} px-10 py-8 absolute rounded-[25px] lg:h-[375px] xl:h-[350px] xs:h-[600px] sm:h-[390px] md:h-[520px]`}>
            <Heading className="text-white font-extrabold text-3xl xl:text-3xl" size="h3">
              {job}
            </Heading>
            <Heading className="mt-3 text-[#905EFF] font-extrabold" size="h5">
              {company}
            </Heading>
            <ul className="mt-6 text-white list-disc sm:text-md text-md xl:text-xl leading-9">
              {bullet1 ? <li>{bullet1}</li>: <></>}  
              {bullet2 ? <li>{bullet2}</li>: <></>}  
              {bullet3 ? <li>{bullet3}</li>: <></>}  
            </ul>
            <p className='xs:left-[20%] xs:bottom-3 xs:absolute sm:left-[8%] sm:bottom-3 sm:absolute sm:text-2xl sm:font-medium mt-2 text-1xl text-green font-semibold'>{date}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="circle1 relative overflow-visible flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green">
         <div className={`${datePosition} absolute `}>
              <p className='flex text-2xl text-white font-bold xl:text-3xl'>{date}</p>
          </div>
         <Image src={UAlberta} alt='Icon' />
          <div className={`${inverseCard} px-10 py-8 absolute rounded-[25px] lg:h-[375px] xl:h-[350px] xs:h-[600px] sm:h-[390px] md:h-[520px]`}>
            <Heading className="text-white font-extrabold xl:text-3xl" size="h3">
              {job}
            </Heading>
            <Heading className="mt-3 text-[#905EFF] font-extrabold" size="h5">
              {company}
            </Heading>
            <ul className="mt-6 text-white list-disc text-md xl:text-xl leading-9">
              {bullet1 ? <li>{bullet1}</li>: <></>}  
              {bullet2 ? <li>{bullet2}</li>: <></>}  
              {bullet3 ? <li>{bullet3}</li>: <></>}  
            </ul>
          </div>
        </div>
      );
    }
};

export default ExperienceCard;
