import React from "react";
import hero from "../assets/1.jpg";
import { Aboutinfo } from "../Constant";
import { IoMdArrowDropright } from "react-icons/io";
import { StickyScrollRevealDemo } from "./ui/Work/WorkComponent";

const AboutMe = () => {
  return (
    <section className="container mx-auto text-ash flex flex-col gap-20">
      <div className="grid grid-cols-2">
        {/* infos  */}
        <div className="w-full flex flex-col gap-10">
          <h2 className="text-[32px]">
            <span className="text-nion text-3xl">01.</span> About Me
          </h2>

          <p className="text-[18px] leading-[30px]">
            Hello there! I'm thrilled to welcome you to my profile. My name is
            Mazz, and I'm a dedicated web developer with a knack for crafting
            dynamic and user-friendly digital experiences. Armed with an MSc
            degree in Software Engineering from the esteemed{" "}
            <span className="text-nion">University of Bolton</span>, UK, I bring
            a robust academic background to the table. Currently, I'm leveraging
            my expertise as a web developer at a prominent{" "}
            <span className="text-nion">Property Service</span> firm in the UK,
            where I thrive on bringing innovative solutions to the digital
            realm.
          </p>

          <div>
            <p className="text-[20px]">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-[13px]">
              {Aboutinfo.map((item, id) => (
                <li className="flex items-center gap-2">
                  <IoMdArrowDropright className="text-nion" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* image  */}
        <div className="w-full flex justify-center">
          <img src={hero} className="object-contain h-[500px] w-full" />
        </div>
      </div>

      <div>
        <h2 className="text-[32px]">
          <span className="text-nion text-3xl">02.</span> Where I have Worked
        </h2>

        <StickyScrollRevealDemo/>
      </div>
    </section>
  );
};

export default AboutMe;
