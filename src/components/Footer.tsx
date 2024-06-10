import React from "react";
import { Home, User, Settings, MessageCircle, Heart } from "lucide-react";
import UserItem from "./UserItem";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-200 py-2 shadow-md">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Settings className="w-6 h-6" />
        <MessageCircle className="w-6 h-6" />
        <Home className="w-6 h-6" />
        <Heart className="w-6 h-6" />
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
          <p>GD</p>
        </div>
        {/* <UserItem className=" w-6 h-6" /> */}
        {/* <User className="w-6 h-6" /> */}
      </div>
    </div>
  );
};

export default Footer;
