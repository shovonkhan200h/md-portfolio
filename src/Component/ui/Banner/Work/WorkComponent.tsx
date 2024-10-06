"use client";
import React from "react";
import { StickyScroll } from "./Work";
// import Image from "next/image";

const content = [
  {
    title: "Front End Developer",
    description:
      "Assisted in the development and testing of web applications using HTML, CSS, JavaScript and React.Js. Gained experience in code reviews and version control using Git and GitHub.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Property Service Uk <br /> March 2023 - Present
      </div>
    ),
  },
  {
    title: "Freelance Web Developer",
    description:
      "Developed and designed various websites for small businesses using HTML, CSS, and JavaScript. Learned to manage client relationships, deadlines, and project expectations. Designed and developed a responsive website for a local restaurant resulting in an increase in online reservations.Developed and deployed a WordPress website for a local retail storeWorked with clients to create a unique online presence in line with their business needs.Managed project timelines to ensure timely delivery.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Fiverr <br /> Jan 2022 - Present
      </div>
    ),
  },
  // {
  //   title: "Junior Web Developer",
  //   description:
  //     "Developed and designed various websites for small businesses using HTML, CSS, and JavaScript. Learned to manage client relationships, deadlines, and project expectations. Designed and developed a responsive website for a local restaurant resulting in an increase in online reservations.Developed and deployed a WordPress website for a local retail storeWorked with clients to create a unique online presence in line with their business needs.Managed project timelines to ensure timely delivery.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Fiverr
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
