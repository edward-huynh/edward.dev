import Image from "next/image";
import avt from "@/assets/img/avt.png";
import { Code, MailIcon, MapPin, PhoneCall, Plus } from "lucide-react";
import { TypingAnimation } from "./magicui/typing-animation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { DownloadCVButton } from "./DownloadCVButton";

const socials = [
  {
    name: "Junior Frontend Developer",
    href: "#",
    icon: Code,
  },
  {
    name: "Github",
    href: "https://github.com/Marious-11",
    icon: GitHubLogoIcon,
  },

  {
    name: "phatht2911@gmail.com",
    href: "https://github.com/hnhnphat",
    icon: MailIcon,
  },
  {
    name: "District 8, HCM City",
    href: "#",
    icon: MapPin,
  },
  {
    name: "+84 916 215 180",
    href: "#",
    icon: PhoneCall,
  },
];
export const InfoComponents = () => {
  return (
    <div className="w-full flex flex-col gap-3 lg:gap-0">
      <div
        id="info"
        className=" min-h-[250px] w-full overflow-hidden rounded-lg  z-20 relative -mt-28 flex flex-col lg:flex-row justify-between items-center  lg:pl-10 gap-2 lg:gap-10"
      >
        <div className="flex flex-col lg:flex-row gap-2 lg:items-end">
          <div className="w-44 h-44 min-w-44 rounded-full bg-black">
            <Image
              alt="avatar"
              src={avt.src}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2  ">
            <h2 className="text-3xl font-bold transition-all duration-200">
              Huỳnh Tấn Phát
            </h2>
            <div className="w-full flex flex-wrap gap-2 min-h-[56px]">
              {socials.map((item, index) => {
                if (item.href === "#") {
                  return (
                    <div
                      key={index}
                      className="flex gap-1 items-center h-fit bg-primary/20 py-1 px-3 text-sm font-semibold rounded-full "
                    >
                      <item.icon className="size-4" />
                      {item.name}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex gap-1 items-center bg-primary/20 py-1 h-fit px-3 text-sm font-semibold rounded-full cursor-pointer"
                  >
                    <item.icon className="size-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap gap-2 items-center w-full lg:min-w-fit lg:w-fit mt-3">
          <DownloadCVButton />
        </div>
      </div>
      <TypingAnimation
        className="font-medium text-lg transition-all duration-200 min-h-[60px]"
        duration={10}
      >
        Hello, my name is Huỳnh Tấn Phát. I am currently working as a Front-end
        Developer with over 1.5 years of experience in user interface
        development. I am eager to contribute and further develop my skills in a
        professional environment—one that fosters creativity and innovation to
        deliver effective and sustainable software solutions.
      </TypingAnimation>
    </div>
  );
};
