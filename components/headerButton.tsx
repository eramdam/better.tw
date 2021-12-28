import Link from "next/link";
import { ReactNode } from "react";
import { FeatherIcon, Icon } from "./icon";

interface HeaderButtonProps {
  icon: FeatherIcon;
  href: string;
  children: ReactNode;
}

export const HeaderButton = (props: HeaderButtonProps) => {
  const content = (
    <a
      className="text-white text-sm font-medium grid grid-flow-col auto-cols-auto gap-2 items-center bg-opacity-20 bg-black rounded-md py-[5px] px-2 hover:bg-opacity-30 transition-colors"
      style={{
        textShadow: "0 2px 2px rgba(0, 0, 0, 0.28)",
      }}
    >
      <Icon
        size={16}
        name={props.icon}
        className="filter drop-shadow-headerButton"
      />
      {props.children}
    </a>
  );

  if (props.href.startsWith("/")) {
    return <Link href={props.href}>{content}</Link>;
  }

  return content;
};
