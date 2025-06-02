// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mon App Next.js',
  description: 'Une base solide avec layout global',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f1f1f1' }}>
          <h1>🚀 Mon App Next.js</h1>
        </header>

        <main style={{ padding: '2rem' }}>{children}</main>

        <footer style={{ padding: '1rem', backgroundColor: '#f1f1f1', marginTop: '2rem' }}>
          <p>© {new Date().getFullYear()} Mon App. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
