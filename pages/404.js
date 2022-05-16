import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    // console.log("UseEffect has been runned");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

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
