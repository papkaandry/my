
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "MySite",
  description: "Starter: ссылки + камера"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-black text-white">
        {/* Левое меню */}
        <nav className="w-56 h-screen bg-neutral-900 p-4">
          <h2 className="text-cyan-400 mb-4">Меню</h2>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-cyan-400">Главная</a></li>
            <li><a href="/about" className="hover:text-cyan-400">О нас</a></li>
            <li><a href="/services" className="hover:text-cyan-400">Услуги</a></li>
            <li><a href="/contact" className="hover:text-cyan-400">Контакты</a></li>
          </ul>
        </nav>

        {/* Контент справа */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
