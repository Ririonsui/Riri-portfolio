import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riri-creative-portfolio.cosmic-myna-6898.chatgpt.site"),
  title: "Riri — Content Creator & Video Editor",
  description: "Riri turns ideas and digital products into visual stories people want to watch.",
  keywords: ["Riri", "content creator", "video editor", "creative storyteller", "Lagos"],
  openGraph: { title: "Riri — Creative Storyteller", description: "Visual stories people actually want to watch.", type: "website" },
  twitter: { card: "summary", title: "Riri — Creative Storyteller", description: "Visual stories people actually want to watch." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
