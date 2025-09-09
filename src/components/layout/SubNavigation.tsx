export default function SubNavigation() {
  return (
    <div className="bg-[#fafafa] border border-[#e0e0e0] rounded-lg px-4 flex items-center gap-2.5 flex-shrink-0 w-[88.5rem] overflow-hidden">
      <div className="flex items-center h-full">
        <div className="border-b-[6px] border-[#18cb96] px-7 py-[17px] pb-[14px] flex items-center justify-start">
          <div className="text-[#1f1f1f] font-semibold text-base">
            Live Chat
          </div>
        </div>
        <div className="px-7 py-[17px] pb-[14px] flex items-center justify-start">
          <div className="text-[rgba(31,31,31,0.6)] font-medium text-base">
            Contacts
          </div>
        </div>
        <div className="px-7 py-[17px] pb-[14px] flex items-center justify-start">
          <div className="text-[rgba(31,31,31,0.6)] font-medium text-base">
            Settings
          </div>
        </div>
      </div>
    </div>
  );
}
