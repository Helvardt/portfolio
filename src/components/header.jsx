import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Lennart<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav + hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button asChild>
            <Link href="/contact">
            Hire me
            </Link>
          </Button>
        </div>

        {/* Mobile nav placeholder */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
