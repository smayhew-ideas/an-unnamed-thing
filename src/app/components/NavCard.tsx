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
      className="block border border-solid border-white p-2 transition-all hover:bg-white/5"
    >
      <p className="font-extrabold text-[14px] text-white tracking-[0.7px] mb-2">
        {title}
      </p>
      <p className="font-light text-[16px] text-[#adadad] tracking-[-0.48px] leading-tight">
        {description}
      </p>
    </Link>
  );
}