type HighlightProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  const Highlight = ({
     children, 
     className 
   }: HighlightProps) => {
    return (
      <span
        className={`${className} font-bold`}
      >
        {children}
      </span>
    );
  };
  
  export default Highlight;
  