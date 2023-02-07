import Link from "next/link";
import { cx } from "../helpers/helpers";
import { DownloadButton } from "./downloadButton";
import styles from "./header.module.css";
import { HeaderButton } from "./headerButton";
import { Icon } from "./icon";

export const Header = () => {
  return (
    <>
      <div className={cx(styles.header, "motion-reduce:animate-none")}>
        <div className="z-20 w-full top-0 my-0 mx-auto max-w-5xl absolute grid grid-flow-col auto-cols-auto gap-[14px] items-center justify-end p-5">
          <HeaderButton icon="heart" href="/donate">
            Donate
          </HeaderButton>
          <HeaderButton
            icon="github"
            href="https://github.com/eramdam/BetterTweetDeck"
          >
            GitHub
          </HeaderButton>
          <HeaderButton icon="twitter" href="https://twitter.com/BetterTDeck">
            Follow
          </HeaderButton>
        </div>
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
                Take TweetDeck to the next level
              </div>
            </div>
          </a>
        </Link>
      </div>

      <nav className="z-30 relative grid justify-center grid-flow-col auto-cols-auto gap-4 translate-y-[-20px]">
        <DownloadButton browser="chrome" />
        <DownloadButton browser="safari" />
        <DownloadButton browser="firefox" />
        <DownloadButton browser="edge" />
        <DownloadButton browser="opera" />
        <DownloadButton showMobile browser="btd">
          Download
        </DownloadButton>
      </nav>
      <div className="mx-5 flex items-center justify-center">
        <div className="block lg:max-w-4xl">
          <h2 className="uppercase text-red-600 flex items-center gap-2">
            <Icon size={24} name={"alert-triangle"} className="align-middle" />{" "}
            Disclaimer
          </h2>

          <p>
            Better TweetDeck is provided &apos;as-is&apos;,{" "}
            <strong>will not</strong> work on the new TweetDeck UI and will{" "}
            <strong>not</strong> receive any new updates as of February 2023.{" "}
            You can see the full context about that decision in this{" "}
            <a href="https://github.com/eramdam/BetterTweetDeck/issues/848">
              GitHub
            </a>{" "}
            issue
          </p>
        </div>
      </div>
    </>
  );
};
