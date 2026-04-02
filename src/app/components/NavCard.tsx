import { Link } from "react-router";

interface NavCardProps {
  title: string;
  description: string;
  link: string;
  onClick?: () => void;
}

export function NavCard({ title, description, link, onClick }: NavCardProps) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="block border border-white/15 p-2 transition-all hover:bg-white/5"
    >
      <p className="font-light text-[11px] text-white/50 tracking-[0.7px] mb-2">
        {title}
      </p>
      <p className="font-light text-[13px] text-white/30 tracking-[-0.3px] leading-tight">
        {description}
      </p>
    </Link>
  );
}
