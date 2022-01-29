import GithubSlugger from "github-slugger";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import {
  HeadingComponent,
  ReactMarkdownNames,
} from "react-markdown/lib/ast-to-react";
import { getAllPosts, getPostBySlug } from "../helpers/postHelpers";
const slugger = new GithubSlugger();

const headingComponent: HeadingComponent | ReactMarkdownNames = props => {
  return React.createElement(
    props.node.tagName,
    {
      id: slugger.slug(String(props.children)),
    },
    props.children
  );
};

const components: ComponentProps<typeof ReactMarkdown>["components"] = {
  img: props => {
    return <Image src={props.src || ""} alt={props.alt || ""} layout="fill" />;
  },
  h1: headingComponent,
  h2: headingComponent,
  h3: headingComponent,
  h4: headingComponent,
  h5: headingComponent,
  h6: headingComponent,
};

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  if ((!router.isFallback && !props.post?.slug) || !props.post) {
    return "Oups";
  }

  return (
    <>
      <Head>
        <title>Better TweetDeck - {props.post.title}</title>
      </Head>
      <div className="w-full py-12 mt-5 my-0 mx-auto prose prose-lg prose-gray prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline dark:prose-invert">
        <h1>{props.post.title}</h1>

        <ReactMarkdown components={components}>
          {props.post.content}
        </ReactMarkdown>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<
  {
    post?: {
      content: string;
      title: string;
      slug: string;
    };
  },
  ParsedUrlQuery & {
    slug: string;
  }
> = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: {},
    };
  }

  const post = getPostBySlug(params.slug, ["title", "slug", "content"]);

  return {
    props: {
      post: {
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: String(post.slug).split("/"),
        },
      };
    }),
    fallback: false,
  };
};
