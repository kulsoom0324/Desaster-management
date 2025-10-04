import Link from "next/link";
import { Github, Twitter, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Disaster Management</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Disaster Management. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
