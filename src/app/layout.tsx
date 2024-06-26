import type { Metadata } from 'next';
import { RootLayout } from '@/app/components/RootLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: "SIGL",
  description: "Site Vitrine SIGL",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <ToastContainer theme="light"/>
      </body>
    </html>
  );
}
