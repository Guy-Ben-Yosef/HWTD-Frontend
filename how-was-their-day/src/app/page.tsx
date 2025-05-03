'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="user-profile">
        {session.user.image && (
          <div className="user-avatar-container">
            <Image 
              src={session.user.image} 
              alt="Profile" 
              width={32}
              height={32}
              className="user-avatar"
            />
          </div>
        )}
        <span className="user-name">
          {session.user.name}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="login-button"
        >
          Sign out
        </button>
        <Link 
          href="/dashboard"
          className="login-button login-button-primary"
        >
          Dashboard
        </Link>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="login-button login-button-primary"
    >
      Sign in
    </button>
  );
}