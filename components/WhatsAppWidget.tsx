"use client";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans selection:bg-brand/10">
      {/* Floating button */}
      <a
        href="https://wa.me/918814999939"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Outer pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10"></span>
        
        {/* WhatsApp Icon */}
        <i className="fa-brands fa-whatsapp text-3xl transition-transform duration-300 group-hover:rotate-[10deg]"></i>
      </a>
    </div>
  );
}
