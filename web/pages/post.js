import Layout from "../components/Layout";
import Link from "next/link";

export default function Post() {
  return (
    <Layout title={"Friendship Bus"}>
      <div className="bg-blue-200 border border-blue-500 p-5 m-5 rounded-xl">
        <h1 className="mb-5 text-center text-blue-700 font-bold tracking-tight">
          Lego Friends Friendship Bus
        </h1>
        <img
          className="rounded-md"
          src="https://www.lego.com/cdn/cs/set/assets/blt92b5ed56a66f76cc/41395.jpg"
          alt="lego friends build"
        />
        <div>
          <p className="mt-5 text-blue-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae luctus orci, ac aliquam turpis. Nunc tristique nec quam ut
            accumsan. Duis eu dui non urna pharetra posuere. Morbi urna lorem,
            tristique et pretium non, posuere cursus mi. Nunc diam nisi, viverra
            sit amet pellentesque et, tincidunt eget lorem. Duis elementum
            pharetra dictum. Nulla et metus feugiat, laoreet justo quis, maximus
            erat. Aenean tincidunt dignissim lacinia. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Ut eros sem, semper placerat imperdiet ut, pellentesque sit
            amet felis.
          </p>
        </div>
      </div>
      <p className="mt-5 pb-10 text-left ml-5 text-blue-700">
        <Link href="/">
          <a className="text-xl font-bold">🠔 BACK</a>
        </Link>
      </p>
    </Layout>
  );
}
