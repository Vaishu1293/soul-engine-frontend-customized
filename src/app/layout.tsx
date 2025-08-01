
import "./globals.css";
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import { Toaster } from "sonner";
import UseMousePointer from "@/utils/MouseCursor";
import AuthSessionProvider from "@/contextApi/AuthSessionProvider";
export const metadata = {
  title: "NFT Marketplace React NextJs Template | Piland",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.png" />
        </head>

        <body className="body-bg" suppressHydrationWarning={true}>
          <AuthSessionProvider>
          <UseMousePointer />
          <AppProvider>{children}</AppProvider>
          <Toaster position="top-center" richColors />
        </AuthSessionProvider>
        </body>
      </html>
    </>
  );
}
