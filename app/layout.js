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
    <html lang="pt-br" data-theme="light" style={{colorScheme: 'light only'}}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#F6F6F6" />
        <meta name="msapplication-navbutton-color" content="#F6F6F6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
        {/* Samsung Internet específico */}
        <meta name="samsung-internet-color-scheme" content="light" />
        <meta name="samsung-internet-theme-color" content="#F6F6F6" />
        {/* Outros navegadores móveis */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="light" />
      </head>
      <body data-theme="light" style={{backgroundColor: '#F6F6F6', color: '#4B3F3A', colorScheme: 'light only'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#F6F6F6",
            color: "#4B3F3A",
            colorScheme: "light only",
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
