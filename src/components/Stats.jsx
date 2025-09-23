"use client";

import Image from "next/image";           
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 4,  text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 8,  text: "Technologies and frameworks mastered" },
  { num: 8,  text: "Clients" },
];

const icons = [
  "/assets/icon-1.svg",
  "/assets/icon-2.svg",
  "/assets/icon-3.svg",
  "/assets/icon-4.svg",
  "/assets/icon-5.svg",
  "/assets/icon-6.svg",
  "/assets/icon-7.svg",
  "/assets/icon-8.svg",
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* top stats */}
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => (
            <div
              key={item.text}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Icon swipe */}
<div className="relative my-6 md:my-8 w-full">
  {/* Center the visible viewport */}
  <div className="mx-auto max-w-5xl overflow-hidden">
    {/* Optional edge fades */}
    <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-[min(40rem,50%)] w-24 bg-gradient-to-r from-primary to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-1/2 translate-x-[min(40rem,50%)] w-24 bg-gradient-to-l from-primary to-transparent" />

    <motion.div
      className="flex w-[200%] gap-8"  // total track = 200%
      animate={{ x: ["0%", "-50%"] }}  // slide one half width
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    >
      {/* First half */}
      <div className="flex w-1/2 shrink-0 justify-center gap-8">
        {icons.map((icon, i) => (
          <Image
            key={`a-${i}`}
            src={icon}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 md:h-[50px] md:w-[50px] select-none"
            draggable={false}
          />
        ))}
      </div>

      {/* Second (identical) half */}
      <div className="flex w-1/2 shrink-0 justify-center gap-8">
        {icons.map((icon, i) => (
          <Image
            key={`b-${i}`}
            src={icon}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 md:h-[50px] md:w-[50px] select-none"
            draggable={false}
          />
        ))}
      </div>
    </motion.div>
  </div>
</div>
</div>

    </section>
  )}
