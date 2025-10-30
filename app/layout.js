import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Nathan Maniego - Computer Science Student & Developer',
  description: 'Portfolio website of Nathan Maniego, a Computer Science student at the University of Toronto passionate about building innovative solutions and exploring emerging technologies.',
  keywords: 'Nathan Maniego, Computer Science, Developer, Portfolio, University of Toronto, React, Next.js, Machine Learning',
  authors: [{ name: 'Nathan Maniego' }],
  creator: 'Nathan Maniego',
  openGraph: {
    title: 'Nathan Maniego - Computer Science Student & Developer',
    description: 'Portfolio website showcasing projects in web development, machine learning, and software engineering.',
    url: 'https://nathanmaniego.dev',
    siteName: 'Nathan Maniego Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nathan Maniego Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathan Maniego - Computer Science Student & Developer',
    description: 'Portfolio website showcasing projects in web development, machine learning, and software engineering.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
