"use client";

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
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Skyla, your AI-powered pricing assistant. Send me a query, and I'll help you calculate the best rates instantly! Let's get started. 🚀",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: "2", 
      text: "Hi,\n\nKindly quote for the following hotel:\n\nNo. of adults - 12\nCity - Delhi\n\nHotel - Novotel Aerocity",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Your Rates are ready! 🎯 Let me know if you need any adjustments.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newUserMessage: Message = {
        id: Date.now().toString(),
        text: inputText.trim(),
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newUserMessage]);
      setInputText("");
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for your message! How can I help you further?",
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
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
      <div 
        ref={chatContainerRef}
        className="bg-[var(--whatsapp-bg)] border-l border-[var(--whatsapp-border)] p-4 flex-1 flex flex-col overflow-y-auto"
      >
        <div className="flex flex-col gap-4 flex-1">
          {messages.map((message) => (
            <div key={message.id}>
              {message.isUser ? (
                /* User Message */
                <div className="flex items-start gap-4 justify-end">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md flex items-end gap-2">
                    <div className="flex-1 text-[var(--whatsapp-text)] whitespace-pre-wrap">
                      {message.text}
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                </div>
              ) : (
                /* AI Message */
                <div className="flex items-start gap-4">
                  <div className="border border-[#7e7e7e] rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-md">
                    <p className="text-[var(--whatsapp-text)] whitespace-pre-wrap">
                      {message.text.includes("Rates") ? (
                        <>
                          <span className="text-[var(--whatsapp-text)]">Your </span>
                          <span className="text-[var(--whatsapp-primary)] font-semibold underline">
                            Rates
                          </span>
                          <span className="text-[var(--whatsapp-text)]">
                            {" "}
                            are ready! 🎯 Let me know if you need any adjustments.
                          </span>
                        </>
                      ) : (
                        message.text
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="bg-white border border-[#c2c5c8] rounded-2xl px-6 py-4 flex flex-col gap-6">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Write your message..."
            className="text-[#7e7e7e] font-medium bg-transparent border-none outline-none resize-none"
            rows={1}
            style={{ minHeight: "24px" }}
          />

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

            <Button 
              onClick={handleSendMessage}
              className="bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary)]/90 rounded-full w-10 h-10 p-0"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
