"use client"; // 1. Adicionar "use client" para poder usar estado

import { useState } from "react"; // 2. Importar useState
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import SearchOverlay from "@/components/SearchOverlay";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <html lang="pt-br" data-theme="light">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#F6F6F6" />
        <meta name="msapplication-navbutton-color" content="#F6F6F6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
      </head>
      <body data-theme="light">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header onSearchClick={() => setIsSearchOpen(true)} />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsappButton />
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </body>
    </html>
  );
}
