import Highlight from "./Highlight";

const Banner = () => {
  return (
    <div className="mt-10 mb-8 items-center ml-10">
      <div className="gap-5 flex flex-col basis-3/5">
        <h1 id="Carlos" className="text-5xl">
          Hello 👋 I am <br /> <Highlight>Carlos Colina</Highlight>
        </h1>
        <div className="text-2xl">
          Computer Engineering Coop student currently interning at Ovintiv (Encana) as a Land Innovations Developer Intern
        </div>
      </div>
    </div>
  );
};

export default Banner;
