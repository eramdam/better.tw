import Link from "next/link";
import { ReactNode } from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl my-0 mx-auto flex flex-col md:flex-row gap-4 items-center justify-between p-5">
        <small className="text-sm text-left flex-1 text-neutral-800">
          Better TweetDeck is not affiliated with Twitter or TweetDeck.
        </small>
        <nav className="uppercase text-sm grid grid-flow-row auto-rows-auto sm:grid-flow-col sm:auto-cols-auto gap-5 sm:justify-end w-full md:w-auto justify-center">
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/donate">Donate</FooterLink>
          <FooterLink href="https://better.tw/discord">Discord</FooterLink>
          <FooterLink href="https://github.com/eramdam/BetterTweetDeck/releases">
            Releases
          </FooterLink>
          <FooterLink href="https://github.com/eramdam/BetterTweetDeck">
            GitHub
          </FooterLink>
          <FooterLink href="https://twitter.com/BetterTDeck">
            Twitter
          </FooterLink>
        </nav>
      </div>
    </div>
  );
};

const FooterLink = (props: { href: string, children: ReactNode }) => {
  const content = (
    <a
      href={props.href}
      className="text-neutral-800 hover:underline transition-colors no-underline"
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
