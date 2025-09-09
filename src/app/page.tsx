import Header from "@/components/layout/Header";
import SubNavigation from "@/components/layout/SubNavigation";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import UserProfile from "@/components/profile/UserProfile";
import { Search, ArrowUpDown, Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="p-3 flex flex-row gap-4 items-start justify-start flex-wrap content-start relative">
      {/* Header 1 - Main Header */}
      <Header />

      {/* Main Content Layout */}
      <div className="flex flex-col gap-4 items-start justify-start flex-1">
        {/* Header 2 - Sub Navigation */}
        <SubNavigation />

        {/* Main Content Area - frame-48095895 */}
        <div className="flex flex-col gap-2.5 items-start justify-start flex-shrink-0 w-[88.5rem] h-[851px]">
          {/* Header 3 - Chat Section Header (frame-32) */}
          <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-t-lg p-4 flex items-center justify-start flex-wrap content-center gap-2.5 overflow-hidden flex-shrink-0 w-full">
            <div className="text-[#1f1f1f] font-medium text-xl flex-1 flex items-center justify-start">
              Live Chat
            </div>
            <div className="border border-[#979797] rounded-[7px] px-2 py-2 flex items-center gap-2 backdrop-blur-[8.5px]">
              <Search size={20} className="text-[#979797]" />
              <div className="text-[#979797] font-medium text-[18.8px]">
                Search Name or Mobile Number
              </div>
            </div>
            <div className="border border-[#979797] rounded-[7px] px-2 py-2 flex items-center justify-center gap-2 backdrop-blur-[8.5px]">
              <ArrowUpDown size={24} className="text-[#979797]" />
              <div className="text-[#979797] font-semibold text-[18.8px]">
                Sort
              </div>
            </div>
            <div className="border border-[#979797] rounded-[7px] px-2 py-2 flex items-center justify-center gap-2 backdrop-blur-[8.5px]">
              <Filter size={24} className="text-[#979797]" />
              <div className="text-[#979797] font-semibold text-[18.8px]">
                Filter
              </div>
            </div>
          </div>

          {/* Main Content Layout - frame-48095896 */}
          <div className="flex gap-0 items-start justify-start w-full flex-1 overflow-hidden border border-b-2 mb-[50px]">
            {/* Chat Sidebar */}
            <ChatSidebar />

            {/* Chat Area */}
            <ChatArea />

            {/* User Profile */}
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
