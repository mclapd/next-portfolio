"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Embedded",
    id: "embedded",
    content: (
      <ul className="list-disc pl-2">
        <li>FreeRTOS</li>
        <li>Linux</li>
        <li>Windows Phone</li>
        <li>ARM Cortex-M/ARM Cortex-A/MIPS</li>
        <li>Altium, Eagle cad</li>
        <li>TCP/IP, USB, Serial(RS242/RS485,SPI,I2C), SDIO, JTAG</li>
        <li>Bluetooth, 3G/4G, GPS, Wi-Fi, RFID, Zigbee(802.15.4)</li>
      </ul>
    ),
  },
  {
    title: "Programming",
    id: "programming",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Python</li>
        <li>C#</li>
        <li>JS/TS/HTML/CSS</li>
        <li>SQL</li>
        <li>Dart</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Framework",
    id: "framework",
    content: (
      <ul className="list-disc pl-2">
        <li>STM32Cube/emWin/TouchGFX</li>
        <li>Node.js/Express.js/React.js/NEXT,js/jQuery/Flask</li>
        <li>Bootstrap/Tailwind CSS</li>
        <li>SQLite/PostgreSQL/MongoDB</li>
        <li>.Net framework</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Seoul National University of Science and Technology, Master of
          Engineering, Robotics
        </li>
        <li>
          Seoul National University of Science and Technology, Bachelor of
          Engineering, Robotics
        </li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("embedded");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I have adapted to rapid technological changes and progressively
            expanded my technical expertise. Currently, I am dedicated to
            enhancing my capabilities in AI based automation and web
            development. Through these efforts, I aim to broaden my skill set
            and proactively respond to the evolving landscape, showcasing
            continual growth and adaptability in the face of change. I am very
            excited about the technologies I will learn and experience in the
            future, and my journey into new technologies will continue.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("embedded")}
              active={tab === "embedded"}
            >
              {" "}
              Embedded{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("programming")}
              active={tab === "programming"}
            >
              {" "}
              Programming{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("framework")}
              active={tab === "framework"}
            >
              {" "}
              Framework{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Eublications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}
