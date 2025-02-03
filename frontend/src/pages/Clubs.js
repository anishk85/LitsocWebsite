import * as React from "react";
import ClubsList from "../components/ClubsList";

function Clubs() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500&family=Poppins:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="flex overflow-hidden flex-col pr-6 pb-20 min-h-screen bg-black max-md:pr-5">
      <div className="text-[160.093px] top-0 -mt-12 p-0 left-0 text-[#BFBBA9] font-bricolage font-[500px] ">
        Clubs
        </div>
        <div className="flex gap-5 max-md:flex-col">
          <ClubsList />
        </div>
        <div data-el="div-1" className="self-end w-full max-w-[1875px]" />
      </div>
    </>
  );
}

export default Clubs;
