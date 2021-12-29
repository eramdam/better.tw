import Link from "next/link";
import { ReactNode } from "react";
import { cx } from "../helpers/helpers";

interface BrowserProps {
  anchorStyles: string;
  spanStyles: string;
  target: string;
}
const browsers = [
  "chrome",
  "opera",
  "firefox",
  "btd",
  "edge",
  "safari",
] as const;
const browserProps: { [k in typeof browsers[number]]: BrowserProps } = {
  chrome: {
    target: "/chrome",
    anchorStyles: "bg-icon-chrome",
    spanStyles: "bg-[linear-gradient(to_bottom,#4285f4,#2962bd)]",
  },
  opera: {
    target: "/opera",
    anchorStyles: "bg-icon-opera",
    spanStyles: "bg-[linear-gradient(to_bottom,#cc0f16,#980910)]",
  },
  firefox: {
    target: "/firefox",
    anchorStyles: "bg-icon-firefox",
    spanStyles: "bg-[linear-gradient(to_bottom,#ff9500,#e66000)]",
  },
  btd: {
    target: "#download-btns",
    anchorStyles: "bg-icon-btd bg-downloadButtonBtd",
    spanStyles: "bg-[linear-gradient(to_left,#1fa5f0,#00cbfc)]",
  },
  edge: {
    target: "/edge",
    anchorStyles: "bg-icon-edge",
    spanStyles: "bg-[linear-gradient(to_bottom,#42c45f,#33c1ef)]",
  },
  safari: {
    target: "/safari",
    anchorStyles: "bg-icon-safari",
    spanStyles: "bg-[linear-gradient(to_bottom,#1fa5f0,#1d77e6)]",
  },
};

interface DownloadButtonProps {
  url?: string;
  browser: keyof typeof browserProps;
  children?: ReactNode;
  showMobile?: boolean;
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const anchorProps = {
    href: props.url ? props.url : browserProps[props.browser].target,
    target: props.browser !== "btd" ? "_blank" : undefined,
    browser: props.browser,
  };

  const content = (
    <a
      href={anchorProps.href}
      className={cx(
        "bg-white uppercase text-gray-600 bg-[length:45px] bg-no-repeat bg-downloadButton shadow-downloadButton rounded-[6px] pl-11 py-1.5 px-2.5 text-base hover:-translate-y-2 transition-transform duration-300",
        browserProps[props.browser].anchorStyles,
        (props.showMobile && "block sm:hidden") || "hidden sm:block"
      )}
    >
      <span
        className={cx(
          "overflow-hidden bg-clip-text [-webkit-text-fill-color:transparent] text-current",
          browserProps[props.browser].spanStyles
        )}
      >
        {props.children ? props.children : props.browser}
      </span>
    </a>
  );

  if (anchorProps.href.startsWith("/")) {
    return (
      <Link href={anchorProps.href} passHref>
        {content}
      </Link>
    );
  }

  return content;
};
