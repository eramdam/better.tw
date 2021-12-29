import { ReactNode } from "react";
import { FeatherIcon, Icon } from "./icon";

interface FeatureBlockProps {
  name: ReactNode;
  children: ReactNode;
  icon: FeatherIcon;
}

export const FeatureBlock = (props: FeatureBlockProps) => {
  const { name, children, icon } = props;

  return (
    <div className="grid gap-x-3 text-white p-5 grid-cols-[auto_1fr]">
      <Icon className="my-0 mx-2" size={32} name={icon}></Icon>
      <div>
        <h4 className="mt-0">{name}</h4>
        <p className="text-sm mt-0">{children}</p>
      </div>
    </div>
  );
};
