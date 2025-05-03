'use client';

import Link from 'next/link';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';
import LoginButton from '@/components/auth/LoginButton';

export default function Header({ session }: { session: Session | null }) {
  const pathname = usePathname();
  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="flex items-center">
          <Link href="/" className="header-logo">
            How Was Their Day
          </Link>
          
          {session && (
            <nav className="header-nav">
              <Link 
                href="/dashboard" 
                className={`nav-link ${
                  pathname?.startsWith('/dashboard')
                    ? 'nav-link-active'
                    : ''
                }`}
              >
                Dashboard
              </Link>
            </nav>
          )}
        </div>
        
        <div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}