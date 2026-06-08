import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" }
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="container-narrow flex items-center justify-between py-6">
        <Link href="/" className="text-base font-semibold no-underline">
          Jose Navarro
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
