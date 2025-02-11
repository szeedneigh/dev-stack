"use client "

import dynamic from "next/dynamic";
import "@/app/styles/globals.css";

const DynamicThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => mod.default),
  { ssr: false }
);

const DynamicToaster = dynamic(
  () => import("@/components/ui/toaster").then((mod) => mod.default),
  { ssr: false }
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <DynamicThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <main className="container py-6">{children}</main>
          </div>
          <DynamicToaster />
        </DynamicThemeProvider>
      </body>
    </html>
  );
}
