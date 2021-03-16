import "../styles/app.css";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-200 w-full min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Banner />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
