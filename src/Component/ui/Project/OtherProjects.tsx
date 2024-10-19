import { cn } from "../../../utils/cn";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import React from "react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Clerkenwell bio botanics",
      description:
        "Ticket selling application using React.Js, Framer Motion, firebase",
      icon: <IconEaseInOut />,
      link:'https://www.clerkenwell-bio-botanics.co.uk/'
    },
    {
      title: "Red Onion Food",
      description:
        "Built with React.Js, React Bootstrap, firebase",
      icon: <IconTerminal2 />,
      link:'https://beamish-horse-f98178.netlify.app/'
    },
    {
      title: "Spotify-Clone",
      description:
        "Build with React.Js, TailwindCss, Firebase",
      icon: <IconCurrencyDollar />,
      link:'https://courageous-valkyrie-4a5451.netlify.app'
    },
    {
      title: "Covid-Tracker",
      description: "Build with HTML,CSS, JS",
      icon: <IconCloud />,
      link:'https://shovonkhan200h.github.io/covid-tracker/'
    },
    {
      title: "CAFENA",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
      link:'https://shovonkhan200h.github.io/Coffe-shop/'
    },
    {
      title: "Dell Clone",
      description:
        "Build with HTML,CSS, JS, Bootstrap",
      icon: <IconHelp />,
      link:'https://shovonkhan200h.github.io/dell/'
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto mt-32">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,  // Accept the link as a prop
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string; // Type for link
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        {/* Make the title a clickable link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </a>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
