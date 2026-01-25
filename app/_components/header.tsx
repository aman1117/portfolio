import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <>
      <div className="flex-col mx-auto max-w-2xl items-center justify-center w-full h-full py-2">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-sm md:text-lg text-indigo-700 dark:text-indigo-400 font-bold underline underline-offset-2">
                aman.sharma
              </p>
            </Link>
          </div>
          <nav className="flex gap-1.5 md:gap-2 items-center">
            <Link href="/about" className="text-sm md:text-lg underline text-indigo-700 dark:text-indigo-400 underline-offset-2">
              about
            </Link>
            <Link href="/projects" className="text-sm md:text-lg underline text-indigo-700 dark:text-indigo-400 underline-offset-2">
              projects
            </Link>
            <Link href="/experience" className="text-sm md:text-lg underline text-indigo-700 dark:text-indigo-400 underline-offset-2">
              exp
            </Link>
            <Link href="/contact" className="text-sm md:text-lg underline text-indigo-700 dark:text-indigo-400 underline-offset-2 whitespace-nowrap">
              contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
