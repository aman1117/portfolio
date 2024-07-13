import { EB_Garamond } from "next/font/google";
import Link from "next/link";

const eb_garamond = EB_Garamond({
  weight: "600",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className="flex mx-auto max-w-2xl justify-between w-full h-full">
      <div className="py-4">
        <Link href="/">
          <p
            className={`${eb_garamond.className} text-lg text-indigo-900 underline underline-offset-2`}
          >
            aman.sharma
          </p>
        </Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <Link href="/about">
            <p className="text-lg underline text-indigo-900 underline-offset-2">
              about
            </p>
          </Link>
        </div>
        <div>
          <p className="text-lg underline text-indigo-900 underline-offset-2">
            projects
          </p>
        </div>
        <div>
          <p className="text-lg underline text-indigo-900 underline-offset-2">
            contact me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
