import { Button } from "@/components/ui/button";
import {
  X,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link,
  Image,
  Send,
} from "lucide-react";

export default function ChatArea() {
  return (
    <div className="flex flex-col flex-1 h-[92vh]">
      {/* Chat Header */}
      <div className="bg-[#fafafa] border border-[#e0e0e0] p-4 flex items-center h-[51px] gap-2.5 w-full">
        <div className="w-7 h-7 relative">
          <div className="w-full h-full absolute bg-gray-300 rounded-full"></div>
          <div className="w-4 h-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-sm"></div>
        </div>

        <div className="flex-1 text-[#1f1f1f] font-medium">
          Harsh Agarwal, +91 - 9865423032
        </div>

        <div className="flex items-center gap-2.5">
          <div className="border border-[#18cb96] rounded-lg px-2.5 py-2 flex items-center gap-2">
            <X size={14} className="text-black" />
            <div className="text-black text-xs font-medium">Booking Intent</div>
          </div>
          <div className="border border-[#18cb96] rounded-lg px-2.5 py-2 flex items-center gap-2">
            <X size={14} className="text-black" />
            <div className="text-black text-xs font-medium">Talk to Human</div>
          </div>
          <div className="bg-[#18cb96] rounded-lg px-2.5 py-2 flex items-center">
            <div className="text-[#1f1f1f] text-xs font-medium">Resolve</div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-[var(--whatsapp-bg)] border-l border-[var(--whatsapp-border)] p-4 flex-1 flex flex-col gap-4 justify-end ">
        <div className="flex flex-col gap-4">
          {/* AI Message */}
          <div className="flex items-start gap-4">
            <div className="border border-[#7e7e7e] rounded-full w-6 h-6 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md">
              <p className="text-[var(--whatsapp-text)]">
                Hi! I&apos;m Skyla, your AI-powered pricing assistant. Send me a
                query, and I&apos;ll help you calculate the best rates
                instantly! Let&apos;s get started. 🚀
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md flex items-end gap-2">
              <div className="flex-1 text-[var(--whatsapp-text)]">
                Hi,
                <br />
                <br />
                Kindly quote for the following hotel:
                <br />
                <br />
                No. of adults - 12
                <br />
                City - Delhi
                <br />
                <br />
                Hotel - Novotel Aerocity
              </div>
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-4">
            <div className="border border-[#7e7e7e] rounded-full w-6 h-6 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md">
              <p>
                <span className="text-[var(--whatsapp-text)]">Your </span>
                <span className="text-[var(--whatsapp-primary)] font-semibold underline">
                  Rates
                </span>
                <span className="text-[var(--whatsapp-text)]">
                  {" "}
                  are ready! 🎯 Let me know if you need any adjustments.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border border-[#c2c5c8] rounded-2xl px-6 py-4 flex flex-col gap-6">
          <div className="text-[#7e7e7e] font-medium">
            Write your message...
          </div>

          <div className="flex items-center">
            <div className="py-2 flex gap-2 flex-1">
              <div className="flex gap-0.5">
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Bold size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Italic size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Underline size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Strikethrough size={20} />
                </Button>
              </div>
              <div className="flex gap-0.5">
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Link size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-1">
                  <Image size={20} />
                </Button>
              </div>
            </div>

            <Button className="bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary)]/90 rounded-full w-10 h-10 p-0">
              <Send size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
