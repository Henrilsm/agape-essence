import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import WhatsappButton from '@/components/WhatsappButton.js';
import './globals.css';

export const metadata = {
  title: 'Agape Essence',
  description: 'Seu momento de cuidado com fé e propósito.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsappButton />
      </body>
    </html>
  );
}