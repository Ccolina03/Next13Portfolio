import React, { FC, useState, useEffect } from 'react';
import Heading from '../Heading';
import UAlberta from '../../gallery/icon-ualberta.svg';
import './Experiences.css';

export interface ExperienceCardProps {
  inverse?: boolean;
  job: string;
  company: string;
  bullet1: string;
  bullet2?: string;
  bullet3?: string;
}

const getInverse = (inverse: boolean, screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string => {
  switch (screenSize) {
    case 'md':
        return inverse ? 'jobinverse px-16 py-8' : 'job1 px-10 py-8'
    case 'lg':
        return inverse ? 'jobinverse px-24 py-8' : 'job1 px-10 py-8'
    case 'xl':
      return inverse ? 'jobinverse px-24 py-8' : 'job1 px-10 py-8';
    case 'sm':
    default:
      return 'job1 px-10 py-8';
  }
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  inverse,
  job = 'Dream Job',
  company = 'Shopify',
  bullet1 = 'Improving backend scaling employing Golang and Javaaggggggf',
  bullet2 = 'Front-end tasksfdsssssssssssssssssssssssssss',
  bullet3 = 'front-end more tasks to dofsdaaaaaaaaaaaaa',
}) => {
  const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('lg');
  const inverseCard = getInverse(inverse || false, screenSize);
  useEffect(() => {
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
    <div className="circle1 relative overflow-visible flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green">
      <img src={UAlberta} alt="UAlberta icon" />
      <div className={`${inverseCard} absolute rounded-[25px]`}>
        <Heading className="text-white font-extrabold" size="h3">
          {job}
        </Heading>
        <Heading className="mt-3 text-[#905EFF] font-extrabold" size="h5">
          {company}
        </Heading>
        <ul className="mt-6 text-white list-disc text-lg xl:text-xl leading-9">
          <li>{bullet1}</li>
          <li>{bullet2}</li>
          <li>{bullet3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
