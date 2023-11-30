"use client";
import React, { useEffect, useRef } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "HTML",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "React",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "Next Js",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "Javascript",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "Firebase",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 90,
      type: "React Native",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "Tailwind",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "Android",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "CSS",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "Python",
    },
  ];
  const container = useRef(null);
  const animationData = require("../../../public/assets/hello.json");
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);
  return (
    <div className="">
      <h3 className="tracking-[20px] text-center uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {skills?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <div ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
