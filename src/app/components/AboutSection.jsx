"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgresSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>UC Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransaction] = useTransition();

  function handleTabChange(id) {
    startTransaction(() => {
      setTab(id);
    });
  }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My name is Hannah, and I'm 9 years old. I love to explore the world
            around me and find joy in the little things. My favorite hobbies are
            drawing colorful pictures and reading magical storybooks. I have a
            pet kitten named Whiskers, and we're the best of friends. I enjoy
            spending time outdoors, playing hopscotch, and riding my bike in the
            park. My favorite colors are pink and blue, and I dream of having a
            big garden full of beautiful flowers someday. I go to school and I'm
            in the fourth grade. My favorite subject is science because I love
            learning about the stars, planets, and all the fascinating creatures
            on Earth. I'm a friendly and curious girl, and I always have a big
            smile on my face. I believe that kindness can make the world a
            better place, so I try my best to be kind to everyone I meet. Nice
            to meet you! 😊
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
