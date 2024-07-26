import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex-col mx-auto max-w-2xl items-center justify-center  w-full h-full">
        <div className="border-b"></div>
        <div className="flex items-center justify-between ">
          <div className="md:pb-4 pb-3 pt-1">
            <Link href="/">
              <p className="md:text-lg text-indigo-900 font-bold underline underline-offset-2">
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
              <Link
                href="/projects
          "
              >
                <p className="md:text-lg underline text-indigo-900 underline-offset-2">
                  projects
                </p>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <p className="md:text-lg underline text-indigo-900 underline-offset-2">
                  contact me
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
