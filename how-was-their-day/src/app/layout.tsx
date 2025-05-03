import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/auth.css';
import '../styles/dashboard.css';
import '../styles/landing.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getAuthSession } from '@/lib/auth';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthProvider from '@/providers/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'How Was Their Day',
  description: 'Audio analysis for monitoring environments with vulnerable individuals',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="app-layout">
            <Header session={session} />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}