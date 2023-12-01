"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Projects() {
    const router = useRouter();
  const cardsData = [
    {
      name: "Quickteller Paypoint",
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      link: "https://play.google.com/store/search?q=quickteller+paypoint+for+agent&c=apps&hl=en&gl=US",
      porfolioImage:
        "https://play-lh.googleusercontent.com/zW2JMuisZOz_ctV-pMSdX0xJd9QDLtB-pd5FUtws5J91Iy6d7l9hn9J_BSbP6cFNoB8=w2560-h1440-rw",
      porfolioImage2:
        "https://play-lh.googleusercontent.com/Q-3N9TvML6biFlkvE0PBoQOjvgfTO7Iv_Rsj7JM8PNvxOWtNFJXzORLKxOCVjqyDShS3=w2560-h1440-rw",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Hotel Voyage",
      image: "",
      link: "https://play.google.com/store/apps/details?id=com.decagon.hbapplicationgroupa&hl=en&gl=US",
      porfolioImage:
        "https://play-lh.googleusercontent.com/Uw3XFGp7r7bM3pREPajgXU_2mZH17t-Ruc1YCGOOKVG8koB2Z8pa0YKm_y4JDzE0NBMo=w2560-h1440-rw",
      porfolioImage2:
        "https://play-lh.googleusercontent.com/jTH7uY8IJtiBz86ZYKG2n6eJ6spPaDinRs6UEw3zlb6oI7UNOel9JWr1zSIlJtmRf3A=w2560-h1440-rw",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Mobil Find",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQExtG371zD5dA/company-logo_200_200/0/1669296742664/codefeast_logo?e=1701907200&v=beta&t=LA1tehO1JpZgaHMElen6VrWF5xemCuq6bozHh5vY3MM",
      link: "https://play.google.com/store/apps/details?id=com.decagon.mobifind&hl=en%E2%89%B7=US",
      porfolioImage:
        "https://play-lh.googleusercontent.com/GwdpSKm2lg524hpqQ__F75ONwGNk5Twy26uFbsT79wmvQJxjKBcFX5DHFy6f9g-Wmgk=w2560-h1440-rw",
      porfolioImage2:
        "https://play-lh.googleusercontent.com/fAn63k0uwFOu6g7OHGzDKIJh2LE4rdJlkyGp0_3wBWpim-5jbjQuDWVyLaDyF0ULsDdb=w2560-h1440-rw",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];

  const navigateToLink = (link) => {
    // Replace '/your-linkedin-url' with the actual LinkedIn profile URL
    router.push(
      link
      // "https://play.google.com/store/apps/details?id=com.decagon.mobifind&hl=en%E2%89%B7=US"
    );
  };
  const navigateToLinkQuickteller = (link) => {
    // Replace '/your-linkedin-url' with the actual LinkedIn profile URL
    router.push(
      link
      // "https://play.google.com/store/search?q=quickteller+paypoint+for+agent&c=apps&hl=en&gl=US"
    );
  };

  const navigateToLinkHotelVoyage = (link) => {
    // Replace '/your-linkedin-url' with the actual LinkedIn profile URL
    router.push(
      link
      // "https://play.google.com/store/apps/details?id=com.decagon.hbapplicationgroupa&hl=en&gl=US"
    );
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // getData()
    //   .then((data) => {
    //     setPosts(data);
    //   })
    //   .catch((error) => {
    //     console.log("error fetching posts", error);
    //   });
  }, []);
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Projects
      </h3>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {cardsData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center"></div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <div className=" flex flex-row ">
              <div className="h-100 mx-2">
                <img src={item?.porfolioImage} />
              </div>
              <div className="h-100 mx-2">
                <img src={item?.porfolioImage2} />
              </div>
            </div>
            <div className="h-100 mx-2">
              <button
                onClick={() => navigateToLink(item?.link)}
                className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 mt-4"
              >
                Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
