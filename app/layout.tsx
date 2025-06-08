import '../styles/globals.css';
import { Providers } from '@/components/Providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEAD ANGLE',
  description: 'Marketplace fun & absurde',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
