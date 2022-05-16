import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>Oopss...</h1>
      <h4>That page cannot be found</h4>
      <p>
        Go back to
        <Link href="/">
          <a> HomePage</a>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
