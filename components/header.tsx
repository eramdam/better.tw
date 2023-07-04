import Link from "next/link";
import { cx } from "../helpers/helpers";
import styles from "./header.module.css";
import { Icon } from "./icon";

export const Header = () => {
  return (
    <>
      <div className={cx(styles.header, "motion-reduce:animate-none")}>
        <div
          className={cx(
            styles.bg,
            "after:motion-reduce:animate-none motion-reduce:animate-none"
          )}
        ></div>
        <Link href="/" passHref>
          <a className={styles.logoLink}>
            <div className="[grid-area:logo] xs:w-[96px] w-[60px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/BTD.svg"
                className="max-w-full filter drop-shadow-logo"
                alt=""
              />
            </div>
            <div className="[grid-area:copy] grid auto-rows-auto grid-flow-row gap-[6px] mt-3 xs:mt-0">
              <div
                className={cx(
                  "xs:text-[2rem] text-2xl font-semibold",
                  styles.textShadowTitle
                )}
              >
                Better TweetDeck
              </div>
              <div className={cx("text-base", styles.textShadowSubtitle)}>
                2014 - 2023
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="mx-5 flex items-center justify-center">
        <div className="block lg:max-w-4xl prose dark:prose-invert pt-10">
          <h2 className="uppercase text-red-600 flex items-center gap-2">
            <Icon size={24} name={"alert-triangle"} className="align-middle" />{" "}
            Disclaimer
          </h2>

          <p>
            As of July 4th 2023,{" "}
            <a
              href="https://twitter.com/TwitterSupport/status/1675990712297443330"
              target="_blank"
              rel="noreferrer noopener"
            >
              Old TweetDeck has been unplugged, Preview is the way and will
              require a Verification
            </a>
            . Meaning Better TweetDeck is obsolete and will not work anymore.
          </p>

          <p>
            Thank you to everyone who used it, contributed to it, and supported
            the project over the years, whether it was by reporting bugs,
            suggesting features, or donating to the project. It truly has been a
            wild 9 years and I&apos;m glad I could help so many people with my
            &quot;little&quot; project. I wish it didn&apos;t end so suddenly
            but it is what it is.
          </p>

          <p>So long and thanks for all the fish!</p>
          <p>
            — Damien (<a href="https://erambert.me/">@Eramdam</a>)
          </p>
        </div>
      </div>
    </>
  );
};
