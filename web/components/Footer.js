export default function Footer() {
  return (
    <div className="text-center border-t border-blue-800 mx-5 mt-16 py-5">
      <p className="text-blue-900">
        Made with ❤️‍ by{" "}
        <a
          className="font-bold hover:text-yellow-300"
          href="https://www.jamescox.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          James Cox
        </a>
      </p>
      <p className="text-blue-900">
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
