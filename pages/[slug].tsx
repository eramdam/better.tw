import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import markdownToHtml, {
  getAllPosts,
  getPostBySlug,
} from "../helpers/postHelpers";

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  if ((!router.isFallback && !props.post?.slug) || !props.post) {
    return "Oups";
  }

  return (
    <div className="w-full py-12 mt-5 my-0 mx-auto prose prose-lg prose-gray prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline dark:prose-invert">
      <h2>{props.post.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
    </div>
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
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        title: post.title || "",
        slug: post.slug || "",
        content: content || "",
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
