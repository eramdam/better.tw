---
path: /state-of-better-tweetdeck
title: "The state of Better TweetDeck"
hideDownloads: true
---
Hey all!

You probably noticed that updates to Better TweetDeck that are not bug fixes have stopped coming for the past year or so. <br/>
This post aims to explain why that is and what I’m doing to improve the situation, as such, I believe the current state of Better TweetDeck can be boiled down to three factors:

# 1 – TweetDeck’s new – now gone – composer
Back in the spring, TweetDeck  [“revamped” their composer](https://twitter.com/tweetdeck/status/1129478787664683009?lang=en)  by embedding the composer of mobile.twitter.com into an iframe, this had two effects:
1. Granting TweetDeck users feature-parity with Twitter Web in the composer, which meant that GIFs, threads and polls were natively supported! Yay! Also, I wouldn’t need to worry about implementing those myself in Better TweetDeck, so double yay!
2. It was slow to load and was completely isolated from the rest of TweetDeck. That in itself wasn’t the end of the world. However, the fact that this composer was available to a small portion of users was problematic because I couldn’t personally test or reverse engineer it.

The second point was frustrating because I wouldn’t know when that composer would get released to everybody. The possibility of Better TweetDeck breaking in unpredictable ways overnight was very real.
<br/><br/>
Thankfully, Twitter removed that version of the composer in early September, probably because of the performance concerns. Unfortunately, that doesn’t mean that it won’t come back in another form.



# 2 – TweetDeck got better
I know this might come as a surprise because the general sentiment around anything coming from Twitter is that it gets worse and worse over time. As someone who saw the software and platform evolved for the past five years, I can assure you it’s not worse than before.
<br/><br/>
Sure, things changed and randomly broke, but at least we are getting semi-regular updates, now! Back in ~2015, updates were sporadic.
It seems that the TweetDeck team (who is composed than less than ~30 people if I’m not wrong) manages to ship bug fixes and features again, and that’s great!
<br/><br/>
Regular updates also mean that I don’t need to jump on adding a missing feature as much as I needed to since I can expect the TweetDeck team to implement in a reasonable time manner if it makes sense for them to do it.



# 3 – Better TweetDeck does too much
Better TweetDeck is going to be six years old in January of 2020.
<br/><br/>
What started as a small collection of JavaScript functions in a file is now a browser extension used by more than 60,000 users, with over 30 contributors, semi-regular updates, and a long, very long list of features and saw three significant updates.
<br/>
While I am grateful for the state Better TweetDeck is in as a project, I feel like Better TweetDeck has reached the point at which it does too much, not very well; this means a few things in practice:

1. I can’t remove any features because _someone_ uses it or  [depends on it](https://xkcd.com/1172/) 
2. Maintenance has become very hard.
3. It’s hard to come up with new features that make sense and don’t make Better TweetDeck more bloated than it already is.


# The future of Better TweetDeck

I often joked in private about how I rewrote Better TweetDeck every two years or so because I couldn’t stand how messy the code became. I am afraid that this is one of those moments, at the exception that this time, both the codebase **and** the “product” are messy.
<br/><br/>

After having thought about it for a while, I decided that **Better TweetDeck 3.x is going to be in a “feature freeze” state indefinitely**. That may sound scary, but it’s just a complicated way to say that I will only fix “blocker” bugs until the next step of Better TweetDeck is figured out.
<br/><br/>
What is the next step? An obvious answer would be Better TweetDeck 4.0, but this time, I don’t want to “simply” rewrite everything from scratch again, reach feature-parity and call it a day. This time, I believe it is right to re-consider every single feature of Better TweetDeck and see if they still make sense.
<br/>
You can see this as a “reboot” of sorts. I don’t know yet how it will look, but I do know that I need to “start over” and rethink a lot of things both in the code and the extension itself to make it easier to use and to maintain.
<br/><br/>
Work on Better TweetDeck 4.0 started last year; however, it didn’t go as well as I wanted, so I very recently re-started that effort mostly from scratch.
<br/>
**I hope to release Better TweetDeck 4.0 by early 2020.** This is not a formal announcement of anything, this is just me stating a goal and hopefully being able to stick to it, future will tell if I managed to do that or not!
<br/><br/>
If you’ve made it through the end of this post, thank you!
I, again want to reiterate how grateful I am from all the support, kind words , and positivity I’ve received about what started as a small side-project.

<br/>

I needed to write this article for a while now, so I hope it helps understand the current situation of BTD a bit better. <br/>
Thank you for reading.

<br/>

— [Damien / @Eramdam](https://twitter.com/Eramdam)