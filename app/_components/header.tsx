import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

const linkClass =
  "md:text-lg underline underline-offset-2 text-indigo-900 dark:text-indigo-300";

const Header = () => {
  return (
    <>
      <div className="flex-col mx-auto max-w-2xl items-center justify-center  w-full h-full">
        <div className="flex items-center justify-between ">
          {/* <div className="md:pb-4 pb-3 pt-1"> */}
          <div className="flex gap-2 items-center justify-center">
            <Link href="/">
              <p className={`${linkClass} font-bold`}>aman.sharma</p>
            </Link>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div>
              <Link href="/about">
                <p className={linkClass}>about</p>
              </Link>
            </div>
            <div>
              <Link href="/projects">
                <p className={linkClass}>projects</p>
              </Link>
            </div>
            <div>
              <Link href="/experience">
                <p className={linkClass}>exp</p>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <p className={linkClass}>contact me</p>
              </Link>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
