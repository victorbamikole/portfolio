"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();

  const navigateToLinkedIn = () => {
    // Replace '/your-linkedin-url' with the actual LinkedIn profile URL
    router.push(
      "https://www.linkedin.com/in/victor-bamikole-28a642181/?originalSubdomain=ng"
    );
  };

  const navigateToGithub = () => {
    // Replace '/your-linkedin-url' with the actual LinkedIn profile URL
    router.push("https://github.com/victorbamikole");
  };

  return (
    <header className="py-4">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Victor <span className="text-slate-400 font-bold">Bamikole</span>
          </span>
        </div>

        <div className="hidden sm:flex flex-row space-x-4">
          <p className="text-white cursor-pointer">About</p>
          <p className="text-white cursor-pointer">Skills</p>
          <p className="text-white cursor-pointer">Projects</p>
          <p className="text-white cursor-pointer">Contact</p>
        </div>

        <div className="flex space-x-3 items-center">
          <button
            onClick={navigateToLinkedIn}
            className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
          >
            LinkedIn
          </button>
          <button
            onClick={navigateToGithub}
            className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full"
          >
            GitHub
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
