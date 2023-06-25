import './globals.css'
import { Inter } from 'next/font/google'
import "styles/prosemirror.css";
import cx from "classnames";
import { Metadata } from "next";
import Toaster from "./toaster";
import { ReactNode } from "react";


const inter = Inter({ subsets: ['latin'] })

const title =
  "Novel – Notion-style WYSIWYG editor with AI-powered autocompletions";
const description =
  "Novel is a Notion-style WYSIWYG editor with AI-powered autocompletions. Built with Tiptap, OpenAI, and Vercel AI SDK.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@steventey",
  },
  metadataBase: new URL("https://novel.sh"),
  themeColor: "#ffffff",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  <Toaster />
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
