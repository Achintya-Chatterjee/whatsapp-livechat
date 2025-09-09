import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Edit, Info, ChevronDown, Ban } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-br-lg px-4 py-[13px] flex flex-col gap-[13px] w-[300px] h-[780px] flex-shrink-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[var(--whatsapp-text)] font-semibold text-xl flex-1">
          User Profile
        </h3>
      </div>

      {/* User Info */}
      <div className="py-2.5 flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="bg-gray-200 text-gray-600">
            H
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[var(--whatsapp-text)] font-semibold text-sm tracking-[-0.22px]">
              Harsh Agarwal
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="bg-[rgba(24,203,150,0.09)] rounded p-0.5 h-auto"
            >
              <Edit size={12} />
            </Button>
          </div>
          <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm">
            +91 - 9865423032
          </span>
        </div>
      </div>

      <Separator className="bg-[rgba(31,31,31,0.1)]" />

      {/* Details */}
      <div className="flex flex-col gap-2.5">
        {/* Status */}
        <div className="flex items-start gap-4">
          <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
            Status
          </span>
          <div className="flex items-center gap-1 w-[51px]">
            <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm">
              Active
            </span>
            <ChevronDown size={10} className="w-2.5 h-1.5" />
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-4 w-[268px]">
            <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
              Company
            </span>
            <Edit size={16} />
          </div>
        </div>

        {/* Last Active */}
        <div className="flex items-start gap-4 w-[268px]">
          <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
            Last Active
          </span>
          <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm flex-1">
            March 12, 2025, 7:44AM
          </span>
        </div>

        {/* Total Messages */}
        <div className="flex items-start gap-4 w-[268px]">
          <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
            Total Messages
          </span>
          <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm flex-1">
            200
          </span>
        </div>

        {/* Tokens Used */}
        <div className="flex items-start gap-4 w-[268px]">
          <div className="flex items-center gap-1 w-[122px]">
            <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm">
              Tokens Used
            </span>
            <Info size={14} />
          </div>
          <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm flex-1">
            .02%
          </span>
        </div>

        {/* Source */}
        <div className="flex items-center gap-4">
          <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
            Source
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[var(--whatsapp-text-muted)] font-medium text-sm">
              ------
            </span>
            <ChevronDown size={10} className="w-2.5 h-1.5" />
          </div>
        </div>

        {/* Incoming */}
        <div className="flex items-start gap-4">
          <span className="text-[rgba(0,0,0,0.3)] font-medium text-sm w-[122px]">
            Incoming
          </span>
          <span className="text-[var(--whatsapp-green)] font-medium text-sm flex-1">
            Allowed
          </span>
        </div>
      </div>

      <Separator className="bg-[rgba(31,31,31,0.1)]" />

      {/* Attributes */}
      <div className="flex items-center justify-between">
        <span className="text-[var(--whatsapp-text)] font-medium text-base flex-1">
          Attributes
        </span>
        <ChevronDown size={10} className="w-2.5 h-1.5" />
      </div>

      <Separator className="bg-[rgba(31,31,31,0.1)]" />

      {/* Tags */}
      <div className="flex items-center justify-between">
        <span className="text-[var(--whatsapp-text)] font-medium text-base flex-1">
          Tags
        </span>
        <ChevronDown size={10} className="w-2.5 h-1.5" />
      </div>

      <Separator className="bg-[rgba(31,31,31,0.1)]" />

      {/* Files & Media */}
      <div className="flex items-center justify-between">
        <span className="text-[var(--whatsapp-text)] font-medium text-base flex-1">
          Files & Media (200 MB)
        </span>
        <ChevronDown size={10} className="w-2.5 h-1.5" />
      </div>

      <Separator className="bg-[rgba(31,31,31,0.1)]" />

      {/* Block Button */}
      <Button
        variant="outline"
        className="border-[var(--whatsapp-red)] text-[var(--whatsapp-red)] hover:bg-[var(--whatsapp-red)]/10 rounded-lg px-2.5 py-2.5 flex items-center justify-center gap-2"
      >
        <Ban size={20} />
        <span className="text-sm font-medium">Block Incoming Messages</span>
      </Button>
    </div>
  );
}
