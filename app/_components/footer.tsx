import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 border-border mx-auto w-full max-w-2xl flex items-center justify-center m-2">
      <div className="flex items-center justify-center">
        <Link href="/">
          <p className="text-lg text-indigo-700 dark:text-indigo-400 underline underline-offset-2">
            aman.sharma
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
