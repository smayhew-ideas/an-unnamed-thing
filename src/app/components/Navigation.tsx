import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavCard } from "./NavCard";

const navItems = [
  {
    title: "THE LETTER",
    description: "An open letter to the AI industry on the unaccounted input.",
    link: "/letter",
  },
  {
    title: "THE MODEL",
    description: "A toroidal model of extraction and return. The economic loop, made visible.",
    link: "/model",
  },
  {
    title: "THE SUBSTRATE",
    description: "Human cognitive output as the unnamed raw material of AI.",
    link: "/substrate",
  },
  {
    title: "THE LAB",
    description: "The developing argument. Data, precedents, and working documents.",
    link: "/lab",
  },
];
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Right Sidebar */}
      <div className="hidden lg:flex flex-col gap-[13px] w-[195px]">
        {navItems.map((item) => (
          <NavCard
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 bg-white/10 backdrop-blur-sm border border-white rounded-md hover:bg-white/20 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-20 right-6 left-6 max-w-md ml-auto bg-[#090a0a] border border-white/20 p-4 rounded-lg flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <NavCard
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
