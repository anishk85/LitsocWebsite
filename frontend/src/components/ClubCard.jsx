import * as React from "react";

function ClubCard({ title, imageSrc, link }) {
  return (
    <div className="flex flex-col items-center w-[300px] h-[480px] bg-transparent border-white border-[2px] p-4 max-md:w-[250px] max-md:h-[420px]">
      <div className="w-24 h-8 border-2 border-white bg-zinc-100 bg-opacity-10 rounded-full text-white flex items-center justify-center"> 
        lit-soc
      </div>
      <div className="relative flex items-center justify-center mt-8 bg-transparent rounded-full border-[2px] border-stone-50 h-[200px] w-[200px] max-md:h-[180px] max-md:w-[180px] overflow-hidden">
        <img src={imageSrc} alt="Club" className="w-full h-full object-cover" />
      </div>
      <div className="mt-8 text-4xl font-medium tracking-tighter text-stone-400 max-md:mt-6 max-md:text-2xl text-center">
        {title}
      </div>
      <a href={link} className={`mt-8 text-2xl font-medium tracking-tighter text-blue-400 max-md:mt-6 max-md:text-xl text-center underline`}>
        View More
      </a>
    </div>
  );
}

export default ClubCard;
