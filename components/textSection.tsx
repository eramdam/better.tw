/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

interface TextSectionProps {
  title: ReactNode;
  children: ReactNode;
  maxImageHeight?: number;
  imageUrl?: string;
}

export const TextSection = (props: TextSectionProps) => {
  const renderImagePart = () => {
    if (!props.imageUrl) {
      return null;
    }

    return (
      <img
        src={props.imageUrl}
        alt=""
        className="rounded-xl drop-shadow-heroImages max-w-[80%] max-h-min mx-auto my-0 "
      />
    );
  };

  return (
    <div className="group py-16 px-0 light:bg-white light:odd:bg-neutral-50 dark:even:bg-neutral-800">
      <div className="max-w-full w-full p-5 sm:max-w-6xl my-0 mx-auto grid grid-flow-row auto-rows-auto justify-center gap-y-8 sm:auto-cols-fr sm:gap-x-8 sm:[grid-template-areas:'text_image'] sm:group-odd:[grid-template-areas:'image_text']">
        <div className="sm:[grid-area:text]">
          <h2>{props.title}</h2>
          {props.children}
        </div>
        <div className="sm:[grid-area:image]">{renderImagePart()}</div>
      </div>
    </div>
  );
};
