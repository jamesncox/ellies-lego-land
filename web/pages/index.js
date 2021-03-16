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
        <p className="text-blue-800 mx-5 font-bold md:text-2xl">
          Hi, I'm Ellie. Checkout my Lego creations!
        </p>
        <Image
          className="rounded-full"
          src="/images/ellie-avatar.png"
          alt="Ellie avatar"
          height={70}
          width={70}
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
                  <h1 className="text-blue-700 underline font-bold tracking-tight">
                    {title}
                  </h1>
                  <p className="text-blue-900">
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
