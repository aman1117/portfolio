
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex mx-auto max-w-2xl justify-between w-full h-full">
      <div className="md:py-4 py-3">
        <Link href="/">
          <p
            className="md:text-lg text-indigo-900 font-bold underline underline-offset-2"
          >
            aman.sharma
          </p>
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <Link href="/about">
            <p className="md:text-lg underline text-indigo-900 underline-offset-2">
              about
            </p>
          </Link>
        </div>
        <div>
          <p className="md:text-lg underline text-indigo-900 underline-offset-2">
            projects
          </p>
        </div>
        <div>
          <p className="md:text-lg underline text-indigo-900 underline-offset-2">
            contact me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
