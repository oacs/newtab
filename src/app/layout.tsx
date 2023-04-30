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
      <head>
        <title>New tab</title>
      </head>
      <body className="flex min-h-screen items-center justify-center bg-slate-900">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
