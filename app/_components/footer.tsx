import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 mx-auto w-full max-w-2xl flex items-center justify-center m-2">
      <div className="flex items-center justify-center">
        <Link href="/">
          <p className=" text-lg text-indigo-900 underline underline-offset-2">
            aman.sharma
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
