
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
