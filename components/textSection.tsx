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
        style={{ maxHeight: props.maxImageHeight }}
        className="max-h-[390px] rounded-xl drop-shadow-heroImages"
      />
    );
  };

  return (
    <div className="group bg-white py-16 px-0 odd:bg-neutral-50 box-border">
      <div className="w-full max-w-6xl my-0 mx-auto grid auto-cols-fr gap-x-8 [grid-template-areas:'text_image'] group-odd:[grid-template-areas:'image_text']">
        <div
          style={{
            gridArea: "text",
          }}
        >
          <h2>{props.title}</h2>
          {props.children}
        </div>
        <div
          style={{
            gridArea: "image",
          }}
        >
          {renderImagePart()}
        </div>
      </div>
    </div>
  );
};
