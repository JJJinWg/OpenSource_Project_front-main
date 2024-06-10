import UserItem from "./UserItem";
import { Bell, FlagTriangleRight, Fuel, Inbox, Map, Newspaper, Pin, User, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const menuList = [
    {
      group: "Main",
      items: [
        {
          link: "/LatestNews",
          icon: <Newspaper />,
          text: "Latest News & Events",
        },
        {
          link: "/ranking",
          icon: <FlagTriangleRight />,
          text: "TOP100",
        },
        {
          link: "/map",
          icon: <Map />,
          text: "News Map",
        },
        {
          link: "/saved",
          icon: <Pin />,
          text: "Saved",
        },
      ],
    },
    {
      group: "Settings & Account",
      items: [
        {
          link: "/settings",
          icon: <Settings />,
          text: "Settings",
        },
        {
          link: "/account",
          icon: <User />,
          text: "Account",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-[58px] lg:w-sidebar-lg border-r min-h-screen lg:p-4">
      <div className="flex flex-col items-center md:justify-center w-full">
        <UserItem />
      </div>
      <div className="grow">
        {menuList.map((menu, menuIndex) => (
          <div key={menuIndex} className="flex flex-col items-center lg:items-start w-full">
            <div className="hidden pt-2 lg:block font-bold mb-2 w-full">{menu.group}</div>
            {menu.items.map((item, itemIndex) => (
              <Link href={item.link} key={itemIndex} passHref className="w-full">
                <Button
                  variant="secondary"
                  className="flex gap-2 justify-start items-center p-4 w-full text-left hover:bg-gray-200 rounded-md"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.text}</span>
                </Button>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
