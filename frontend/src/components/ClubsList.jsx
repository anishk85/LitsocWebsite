import * as React from "react";
import ClubCard from "./ClubCard";

const clubs = [
  { id: 1, title: "Uhllekh", imageSrc: "https://clipartcraft.com/images/clipart-books-literature-8.png", link: "#" },
  { id: 2, title: "Quriosity", imageSrc: "https://logodix.com/logo/2037339.png", viewMoreColor: "text-sky-500", link: "#" },
  { id: 3, title: "TSOD", imageSrc: "https://freesvg.org/img/Clubs.png", viewMoreColor: "text-sky-500", link: "#" },
  { id: 4, title: "Griffinsight", imageSrc: "https://webstockreview.net/images/social-media-icon-png-9.png", viewMoreColor: "text-sky-500", link: "#" },
];

function ClubsList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 max-w-[100%] mx-auto">
      {clubs.map(club => (
        <ClubCard
          key={club.id}
          title={club.title}
          imageSrc={club.imageSrc}
          viewMoreColor={club.viewMoreColor}
          link={club.link}
        />
      ))}
    </div>
  );
}

export default ClubsList;