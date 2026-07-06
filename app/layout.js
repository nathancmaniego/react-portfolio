import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nathanmaniego.com"),
  title: "Nathan Maniego | Computer Science Student & Developer",
  description:
    "Portfolio of Nathan Maniego, a Computer Science student at the University of Toronto passionate about building innovative solutions, full-stack development, and machine learning.",
  keywords: [
    "Nathan Maniego",
    "Computer Science",
    "Developer",
    "Portfolio",
    "University of Toronto",
    "React",
    "Next.js",
    "Full Stack Developer",
    "Software Engineer",
    "Toronto Developer",
  ],
  authors: [{ name: "Nathan Maniego" }],
  creator: "Nathan Maniego",
  openGraph: {
    title: "Nathan Maniego | Computer Science Student & Developer",
    description:
      "Portfolio website showcasing projects in web development, machine learning, and software engineering.",
    url: "https://nathanmaniego.com",
    siteName: "Nathan Maniego Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nathan Maniego - Computer Science Student & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan Maniego | Computer Science Student & Developer",
    description:
      "Portfolio website showcasing projects in web development, machine learning, and software engineering.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  themeColor: "#EFECE6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
