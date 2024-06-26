import { RootLayout } from '@/app/components/RootLayout';
import '@/app/styles/globals.css';

const title = 'SIGL | Système d’Information et Génie Logiciel | Majeure Epita';
const description = `La majeure SIGL du cycle ingénieur d'EPITA prépare les étudiants à aider les entreprises à se transformer vers une nouvelle informatique évolutive et alignée aux besoins métiers. Les thématiques abordées incluent le leadership et la gestion, le cloud et l'architecture, la mobilité et les applications, ainsi que la digitalisation et la transformation.`;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        {/* Primary Meta Tags */}
        <title>SIGL | Système d’Information et Génie Logiciel | Majeure Epita</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://demo-sigl-epita.netlify.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="@/app/assets/logo/sigl-meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://demo-sigl-epita.netlify.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="@/app/assets/logo/sigl-meta.png" />
      </head>
      {/* <Metadata /> */}
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
