import Layout from "../../components/Layout";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
    mainImage,
  } = props;
  return (
    <Layout title={title}>
      <div className="bg-blue-200 border border-blue-500 p-5 m-5 rounded-xl">
        <h1 className="mb-5 text-center text-blue-700 font-bold tracking-tight">
          {title}
        </h1>
        <div className="mb-5 -mt-10">
          {authorImage && (
            <div>
              <img
                className="rounded-full"
                src={urlFor(authorImage).width(50).url()}
              />
            </div>
          )}
          <span className="mr-5 text-blue-900">By {name}</span>
        </div>
        {mainImage && (
          <img
            className="rounded-md"
            src={urlFor(mainImage).width(500).url()}
            alt={title}
          />
        )}
        <div className="mt-5 text-blue-900">
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
          />
        </div>
        {categories && (
          <ul>
            {categories.map((category) => (
              <li className="mt-5 text-red-500 font-bold" key={category}>
                #{category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="mt-5 pb-10 text-left ml-5 text-blue-700">
        <Link href="/">
          <a className="text-xl font-bold">🠔 BACK</a>
        </Link>
      </p>
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;