import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Agent Proof Protocol (APP) v2.4 — The Universal Execution Standard",
  description: "The Universal Execution Standard for the AI Agent Economy. Unifying Global Financial Rails, MCP, WebMCP, Unix Pipelines, Logistics & Labor Marketplace APIs, and Cryptographic Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <Sidebar />
        <main className="lg:pl-72 pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
