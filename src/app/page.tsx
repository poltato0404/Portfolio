"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import bg1 from "../../public/bg1.svg";
import bg2 from "../../public/bg2.svg";
import bg3 from "../../public/bg3.svg";
import bg4 from "../../public/bg4.svg";

const sections = [
  { title: "Work Experience", bg: bg1 },
  { title: "Web Development", bg: bg2 },
  { title: "Cybersecurity", bg: bg3 },
  { title: "Skills", bg: bg4 },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const blurAmount = useTransform(scrollYProgress, [0, 1], ["0px", "15px"]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className="relative h-screen w-full snap-start flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div style={{ filter: blurAmount }}>
            <Image
              src={section.bg}
              alt={`bg-${index}`}
              fill
              className="object-cover"
              priority={index === 0} 
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40" />

          <h1 className="relative z-10 text-4xl font-bold text-white">
            {section.title}
          </h1>
        </motion.section>
      ))}
    </div>
  );
}
