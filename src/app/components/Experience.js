"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../my-porfolio/sanity";
import { groq } from "next-sanity";


async function getData() {
  return client.fetch(groq`*[_type == "experience"]`);
}
const Experience = () => {
  const cardsData = [
    {
      name: "Software Engineer at Interswitch",
      image:
        "https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg",
      description: [
        "Implemented new features in the Quickteller Paypoint mobile app using React Native, ensuring a consistent and high-quality user experience across both Android and iOS platforms.",
        "Spearheaded and successfully integrated the payment and cashout processing SDKs and libraries into the Quickteller Paypoint mobile app to extend its functionality, enhance user experiences, and streamline development processes.",
        "Wrote clean, maintainable, and well-documented code, while actively participating in code reviews to improve code quality and development practices.",
        "Collaborated with cross-functional teams, including backend developers, quality assurance engineers, and product managers, to deliver a cohesive and feature-rich applications.",
      ],
    },

    {
      name: "Software Engineer at Decagon",
      image:
        "https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg",
      title: "Frontend Developer at Chance",
      description: [
        "Developed a p2p loan application that allows a beneficiary to request for a loan from different sponsors",
        "Developed a tracking application using Google Maps location-based services API to help users track their friends and families in real time",
        "Managed tasks using Agile methodology, cleared Sprinted tasks and controlled JIRA workflows",
        "Collaborated with team members in an agile environment and participated in Daily standup meetings, and code reviews",
        "Integrated Facebook, Google, Twitter, Maps V2, and other third-parties APIs within applications.",
      ],
    },
    {
      name: "Android Developer at PTML",
      image: "https://www.ptml-nigeria.com/images/logo-ptml.png",
      description: [
        "Developed the terminal internal App Store from start to finish that allows other company android applications to be downloaded and updated just like the play store",
        "Developed new features for the Driver Android application used on zebras that allow drivers to be notified and scan chassis barcodes for the easy discharge of imported vehicles from the terminal",
        "Successfully deployed the app on the play store and supported the app for different releases of Android OS",
        "Implemented a barcode scanner and improved the security of the application by encrypting the endpoints",
      ],
    },
  ];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("posts", posts);
    posts;
    getData()
      .then((data) => {
        setPosts(data);
         console.log("posts", posts);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {cardsData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
