import { useState } from "react";
import bark1 from "/sounds/bark1.mp3";
import bark2 from "/sounds/bark2.mp3";
import bark3 from "/sounds/bark3.mp3";
import bark4 from "/sounds/bark4.mp3";

export default function DogIcon(props) {
  const [isHovered, setIsHovered] = useState(false);

  const sounds = [{ bark1 }, { bark2 }, { bark3 }, { bark4 }];

  const randomBark = () => {
    const random = Math.floor(Math.random() * sounds.length);

    const audio = new Audio(sounds[random]);
    audio.play().catch((error) => {
      console.error("Playback failed:", error);
    });
  };

  return (
    <div
      className="dog-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={randomBark}
    >
      {isHovered ? (
        <img src={props.second} alt={props.alt} />
      ) : (
        <img src={props.first} alt={props.alt} />
      )}
    </div>
  );
}
