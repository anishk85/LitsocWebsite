import React, { useEffect } from "react";
import ClubsList from "../components/ClubsList";

function Clubs() {
  useEffect(() => {
    const elements = document.querySelectorAll(".jjk");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Removes class when out of view
          }
        });
      },
      { threshold: 0.6 } // Triggers when 40% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el)); // Cleanup observer
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-black overflow-hidden m-0 p-0">
      {/* Clubs Heading */}
      <div className="text-[160px] text-[#BFBBA9] font-bricolage -mt-12 font-medium absolute m-0 p-0">
        Clubs
      </div>

      {/* Clubs List Section */}
      <div className="flex flex-col gap-1 mt-[200px] p-0">
        <div className="jjk">
          <ClubsList />
        </div>
      </div>
    </div>
  );
}

export default Clubs;
