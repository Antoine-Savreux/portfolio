"use client";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import cssIcon from "@/../public/images/css.svg";
import htmlIcon from "@/../public/images/html.svg";
import jsIcon from "@/../public/images/js.svg";
import mysqlIcon from "@/../public/images/mysql.svg";
import nextIcon from "@/../public/images/next.svg";
import phpIcon from "@/../public/images/html.svg";
import reactIcon from "@/../public/images/react.svg";
import tsIcon from "@/../public/images/ts.svg";
import Image from "next/image";

export default function About() {
  const personalInfoData = [
    {
      icon: <User2 size={20} className="text-primary" />,
      text: "Antoine Savreux",
    },
    {
      icon: <PhoneCall size={20} className="text-primary" />,
      text: "06 66 98 79 10",
    },
    {
      icon: <MailIcon size={20} className="text-primary" />,
      text: "antoine.savreux06@gmail.com",
    },
    {
      icon: <Calendar size={20} className="text-primary" />,
      text: "12 juin 1997",
    },
    {
      icon: <HomeIcon size={20} className="text-primary" />,
      text: "Rouen, Normandie",
    },
  ];

  const qualificationData = [
    {
      name: "Titre pro. DWWM",
      school: "O'clock",
    },
    {
      name: " Maitriser Nextjs 14",
      school: "Udemy",
    },
  ];

  const skillData = [
    {
      icon: cssIcon,
      name: "CSS",
    },
    {
      icon: htmlIcon,
      name: "HTML",
    },
    {
      icon: jsIcon,
      name: "Javascript",
    },
    {
      icon: mysqlIcon,
      name: "MySQL",
    },
    {
      icon: nextIcon,
      name: "NextJS",
    },
    {
      icon: phpIcon,
      name: "PHP",
    },
    {
      icon: reactIcon,
      name: "React",
    },
    {
      icon: tsIcon,
      name: "Typescript",
    },
  ];

  const [isClicked, setIsClicked] = useState(1);

  const onClickButton = (e: any) => {
    setIsClicked(e.target.id);
  };

  return (
    <section>
      <div className="flex flex-col space-y-4">
        <button
          id="1"
          onClick={onClickButton}
          className={
            isClicked == 1
              ? "bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full transition-all"
              : "bg-white px-6 py-3 text-xl font-semibold text-darkText rounded-full"
          }
        >
          Infos personnelles
        </button>
        <button
          id="2"
          onClick={onClickButton}
          className={
            isClicked == 2
              ? "bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full transition-all"
              : "bg-white px-6 py-3 text-xl font-semibold text-darkText rounded-full"
          }
        >
          Qualifications
        </button>
        <button
          id="3"
          onClick={onClickButton}
          className={
            isClicked == 3
              ? "bg-primary px-6 py-3 text-xl font-semibold text-lightText rounded-full transition-all"
              : "bg-white px-6 py-3 text-xl font-semibold text-darkText rounded-full"
          }
        >
          Skills
        </button>
        <div>
          {isClicked == 1 &&
            personalInfoData.map((item, index) => (
              <div
                className="flex justify-center space-x-2 space-y-4 items-baseline"
                key={index}
              >
                {item.icon}
                <span className="text-secondary">{item.text}</span>
              </div>
            ))}
          {isClicked == 2 &&
            qualificationData.map((item, index) => (
              <div className="space-x-2" key={index}>
                <p className="text-secondary">
                  {item.name}
                  <span className="font-medium text-primary"> | </span>
                  <strong className="text-secondary">{item.school}</strong>
                </p>
              </div>
            ))}
          {isClicked == 3 &&
            skillData.map((item, index) => (
              <div
                className="flex space-x-2 space-y-4 justify-center items-baseline"
                key={index}
              >
                <Image
                  className="text-primary"
                  width={20}
                  height={20}
                  src={item.icon}
                  alt={`${item.name} logo`}
                />
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
