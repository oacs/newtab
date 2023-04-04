import React from "react";
import "./globals.css";
import QueryProvider from "@/providers/useQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className="min-h-screen bg-slate-900">{children}</body>
      </QueryProvider>
    </html>
  );
}
