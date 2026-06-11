import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baku Journey — Group Fundraiser | Travel to Azerbaijan",
  description: "Join our group fundraiser to visit the beautiful city of Baku, Azerbaijan. Help us make this dream adventure a reality. Contribute through Easypaisa, JazzCash, bank transfer, or PayPal.",
  keywords: ["Baku", "Azerbaijan", "travel", "fundraiser", "group tour", "Pakistan", "Lahore"],
  openGraph: {
    title: "Baku Journey — Group Fundraiser",
    description: "Help us travel to Baku, Azerbaijan — the Land of Fire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
