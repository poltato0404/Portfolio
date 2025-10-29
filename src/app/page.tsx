'use client'

import { useState } from "react";
import Image from "next/image";

import darkBackground from "../../public/darkbg.png";
import background from "../../public/bg.png";
import unlitLamp from "../../public/unlit.png";
import litLamp from "../../public/lantern.gif";
import card from "../../public/card.png";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Background"
          src={isOn ? darkBackground : background}
          fill
          unoptimized
          style={{ imageRendering: "pixelated" }}
          placeholder="blur"
        />
      </div>

      {/* Lamp Toggle (top-right) */}
      <Image
        src={isOn ? unlitLamp : litLamp}
        alt="Toggle Image"
        width={100}
        loading="eager"
        onClick={() => setIsOn(!isOn)}
        className="absolute top-4 right-4 cursor-pointer transition-transform duration-300 hover:scale-110"
      />

      {/* Centered Card */}
      <div className="flex items-center justify-center">
        <Image
          src={card}
          alt="Centered image"
          width={1000}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
