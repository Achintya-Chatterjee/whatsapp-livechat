import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chatUsers = [
  { name: "Ritik", message: "You pinned a message", time: "yesterday" },
  { name: "Santo", message: "You pinned a message", time: "yesterday" },
  { name: "David", message: "You pinned a message", time: "yesterday" },
  { name: "Michael", message: "You pinned a message", time: "yesterday" },
  { name: "Amelia", message: "You pinned a message", time: "yesterday" },
  { name: "Emma", message: "You pinned a message", time: "yesterday" },
  { name: "Olivia", message: "You pinned a message", time: "yesterday" },
  { name: "Mary", message: "You pinned a message", time: "yesterday" },
  { name: "John", message: "You pinned a message", time: "yesterday" },
  { name: "Smith", message: "You pinned a message", time: "yesterday" },
  { name: "Williams", message: "You pinned a message", time: "yesterday" },
];

export default function ChatSidebar() {
  return (
    <div className="flex flex-col">
      {/* Tabs Section */}
      <div className="bg-[#fafafa] border-l border-t border-b border-[#e0e0e0] px-4 flex items-center">
        <div className="flex items-center h-full">
          <div className="border-b-4 border-[#18cb96] px-7 py-4 flex items-center">
            <div className="text-[#1f1f1f] font-semibold">All</div>
          </div>
          <div className="px-7 py-4 flex items-center">
            <div className="text-[rgba(31,31,31,0.6)] font-medium">Pending</div>
          </div>
          <div className="px-7 py-4 flex items-center">
            <div className="text-[rgba(31,31,31,0.6)] font-medium">Booking</div>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="bg-white w-[370px]">
        {chatUsers.map((user, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="px-3 py-3 flex items-center">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-gray-200 text-gray-600 text-lg font-medium">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="border-t border-[#e9edef] pr-3 py-3 flex-1 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-[#111b21] font-medium text-[17px]">
                    {user.name}
                  </div>
                </div>
                <div className="text-[#667781] text-xs">{user.time}</div>
              </div>
              <div className="text-[#667781] text-sm">{user.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
