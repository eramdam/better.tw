import Link from "next/link";
import { ReactNode } from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-neutral-900 ">
      <div className="max-w-5xl my-0 mx-auto flex flex-col md:flex-row gap-4 items-center justify-between p-5">
        <small className="text-sm text-left flex-1 text-neutral-800 dark:text-neutral-50">
          Better TweetDeck is not affiliated with Twitter or TweetDeck.
        </small>
      </div>
    </div>
  );
};

const FooterLink = (props: { href: string; children: ReactNode }) => {
  const content = (
    <a
      href={props.href}
      className="text-neutral-800 hover:underline transition-colors no-underline dark:text-neutral-300"
    >
      {props.children}
    </a>
  );

  if (props.href.startsWith("/")) {
    return (
      <Link href={props.href} passHref>
        {content}
      </Link>
    );
  }

  return content;
};
