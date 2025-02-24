"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative md:hidden group h-10 w-10 flex flex-col items-center justify-center gap-1.5"
      aria-label="Toggle menu"
    >
      <div
        className={`
          h-0.5 bg-cyan-500 rounded-full
          transition-all duration-300 ease-out
          shadow-[0_0_10px_rgba(34,211,238,0.5)]
          ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-8"}
        `}
      />
      <div
        className={`
          h-0.5 bg-cyan-500 rounded-full
          transition-all duration-300 ease-out
          shadow-[0_0_10px_rgba(34,211,238,0.5)]
          ${isOpen ? "w-6 opacity-0" : "w-6"}
        `}
      />
      <div
        className={`
          h-0.5 bg-cyan-500 rounded-full
          transition-all duration-300 ease-out
          shadow-[0_0_10px_rgba(34,211,238,0.5)]
          ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"}
        `}
      />
    </button>
  );
};

export default HamburgerButton;
