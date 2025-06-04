import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata = {
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
