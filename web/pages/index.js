import { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import ImageLoad from "../hooks/ImageLoad";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [] } = props;
  const [showPosts, setShowPosts] = useState(posts);
  const [allUnderline, setAllUnderline] = useState("border-b-2 border-red-600");
  const [customUnderline, setCustomUnderline] = useState("");
  const [standardUnderline, setStandardUnderline] = useState("");

  const showAllBuilds = () => {
    setShowPosts(posts);
    setAllUnderline("border-b-2 border-red-600");
    setCustomUnderline("");
    setStandardUnderline("");
  };

  const showCustomBuilds = () => {
    const customBuilds = posts.filter(
      (post) => post.categories[0] === "Custom Build"
    );
    setShowPosts(customBuilds);
    setAllUnderline("");
    setCustomUnderline("border-b-2 border-red-600");
    setStandardUnderline("");
  };

  const showStandardBuilds = () => {
    const standardBuilds = posts.filter(
      (post) => post.categories[0] === "Standard Build"
    );
    setShowPosts(standardBuilds);
    setAllUnderline("");
    setCustomUnderline("");
    setStandardUnderline("border-b-2 border-red-600");
  };

  return (
    <Layout title="Ellie's Lego Land" width="max-w-xl">
      <div className="flex justify-end mr-5">
        <h1 className="text-blue-800 mx-5 font-bold md:text-2xl">
          Hi, I'm Ellie. I ❤️ Legos!
        </h1>
        <Image
          className="rounded-full bg-white"
          src="/images/girl-avatar.png"
          alt="Ellie avatar"
          height={80}
          width={80}
        />
      </div>

      <nav className="flex justify-around m-5 mt-10 bg-blue-200 p-2 pb-2 rounded-md">
        <button
          className={`text-red-600 font-bold focus:outline-none ${allUnderline}`}
          onClick={showAllBuilds}
        >
          ALL
        </button>
        <button
          className={`text-red-600 font-bold focus:outline-none ${customUnderline}`}
          onClick={showCustomBuilds}
        >
          CUSTOM
        </button>
        <button
          className={`text-red-600 font-bold focus:outline-none ${standardUnderline}`}
          onClick={showStandardBuilds}
        >
          STANDARD
        </button>
      </nav>

      {showPosts.map(
        ({ _id, title = "", slug = "", _updatedAt = "", mainImage }) =>
          slug && (
            <Link key={_id} href="/post/[slug]" as={`/post/${slug.current}`}>
              <a className="grid grid-cols-2 gap-4 bg-blue-200 border border-blue-500 p-5 m-5 rounded-xl">
                {mainImage && (
                  <ImageLoad
                    className="w-48 rounded-md"
                    src={urlFor(mainImage).url()}
                    alt={title}
                    placeholder={`/images/${slug.current + "-tiny.jpg"}`}
                  />
                )}
                <div>
                  <h2 className="font-mono text-blue-700 md:text-xl font-bold">
                    {title}
                  </h2>
                  <p className="text-blue-900 tracking-tight">
                    {new Date(_updatedAt).toDateString()}
                  </p>
                </div>
              </a>
            </Link>
          )
      )}
      <Footer />
    </Layout>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc){
      _id,
      _updatedAt,
      title,
      "categories": categories[]->title,
      mainImage,
      slug
    }
  `),
});

export default Index;
