import { type PropsWithChildren } from 'react';
import Footer from '@/layouts/admin/footer';
import Header from '@/layouts/admin/header';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
