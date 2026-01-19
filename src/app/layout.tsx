import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My-APT",
  description: "Technology with human intervention—transforming apartments into professionally managed living ecosystems.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
