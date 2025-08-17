
import Link from "next/link";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="px-3 py-2 rounded-xl hover:bg-gray-100 transition">
    {label}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">MySite</Link>
        <div className="flex items-center gap-1">
          <NavLink href="/" label="Главная" />
          <NavLink href="/links" label="Ссылки" />
          <NavLink href="/camera" label="Камера" />
        </div>
      </nav>
    </header>
  );
}
