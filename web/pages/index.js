import Layout from "../components/Layout";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [] } = props;
  return (
    <Layout title="Ellie's Lego Land">
      <div className="flex justify-end mr-5">
        <h1 className="text-blue-800 mx-5 font-bold md:text-2xl">
          Hi, I'm Ellie. Checkout my Lego creations!
        </h1>
        <Image
          className="rounded-full bg-white"
          src="/images/girl-avatar.png"
          alt="Ellie avatar"
          height={80}
          width={80}
        />
      </div>
      {posts.map(
        ({ _id, title = "", slug = "", _updatedAt = "", mainImage }) =>
          slug && (
            <Link key={_id} href="/post/[slug]" as={`/post/${slug.current}`}>
              <a className="grid grid-cols-2 gap-4 bg-blue-200 border border-blue-500 p-5 m-5 rounded-xl">
                {mainImage && (
                  <img
                    className="w-48 rounded-md"
                    src={urlFor(mainImage).url()}
                    alt={title}
                  />
                )}
                <div>
                  <h2 className="font-mono text-blue-700 md:text-xl font-bold tracking-tight">
                    {title}
                  </h2>
                  <p className="text-blue-900 font-mono">
                    {new Date(_updatedAt).toDateString()}
                  </p>
                </div>
              </a>
            </Link>
          )
      )}
    </Layout>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});

export default Index;
