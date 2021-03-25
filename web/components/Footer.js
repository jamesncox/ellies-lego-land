export default function Footer() {
  return (
    <div className="text-center border-t border-blue-800 mx-5 py-5">
      <p className="text-blue-900">Made with ❤️‍ by James Cox</p>
      <p className="text-blue-900">
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
