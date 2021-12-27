import Link from "next/link";
import { cx } from "../helpers/helpers";
import { DownloadButton } from "./downloadButton";
import styles from "./header.module.css";
import { HeaderButton } from "./headerButton";

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
          <a href="/" className={styles.logoLink}>
            <div className="[grid-area:logo] xs:w-[96px] w-[60px]">
              <img
                src="/img/BTD.svg"
                className="max-w-full filter drop-shadow-logo"
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
    </>
  );
};
