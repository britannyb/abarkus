import { useState } from "react";

export default function DogIcon(props) {
  const [isHovered, setIsHovered] = useState(false);

  const base = import.meta.env.BASE_URL;
  const sounds = [
    `${base}/sounds/bark1.mp3`,
    `${base}/sounds/bark2.mp3`,
    `${base}/sounds/bark3.mp3`,
    `${base}/sounds/bark4.mp3`,
  ];

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
