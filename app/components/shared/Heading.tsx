import React, {FC, HTMLAttributes} from "react";

//Allowing to inherit HTML Heading elements like 'id', 'style',etc
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
}

const getSize = (size: Pick<HeadingProps, 'size'>['size']): string => {
    switch (size) {
        case 'h1':
            return 'font-primary text-[32px] leading-[39px] font-bold'
        case 'h2':
            return 'font-primary text-[28px] leading-[36px] font-normal';
        case 'h3':
            return 'font-primary text-[24px] leading-[29px] font-bold';
        case 'h4':
            return 'font-primary text-[18px] leading-[27px] font-bold';
        case 'h5':
            return 'font-primary text-[14px] leading-[24px] font-medium';
        case 'h6':
            return 'font-primary text-[12px] leading-[18px] font-semibold'
        default:
            return 'font-primary text-[18px] leading-[27px] font-bold';
    }
}

const Heading: FC<HeadingProps> = (
    {
    children,
    size = 'h4',
    className = "",
    }
) => {
    //keyof = return union of all keys of given type
    //JSX.IntrinsicElements = represent the union of all valid HTML element Names
    //
    const ComponentTag = size as keyof JSX.IntrinsicElements;
    return (
        <ComponentTag className={`${getSize(size)} text-white ${className}`}> 
            {children}
        </ComponentTag>
    )
}

export default Heading
