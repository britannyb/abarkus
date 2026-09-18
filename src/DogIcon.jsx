import { useState } from "react";

export default function DogIcon(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="dog-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <img src={props.second} alt={props.alt} />
      ) : (
        <img src={props.first} alt={props.alt} />
      )}
    </div>
  );
}
