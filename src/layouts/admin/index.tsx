import { type PropsWithChildren } from 'react';
import Footer from '@/layouts/admin/footer';
import Header from '@/layouts/admin/header';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="mx-auto flex-1 px-3 md:px-5">{children}</main>

      <Footer />
    </div>
  );
}
