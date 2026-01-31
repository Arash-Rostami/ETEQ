'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    router.replace(`/${savedLang}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-[#7B5C9D] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
