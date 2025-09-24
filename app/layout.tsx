import './globals.css'
import Navbar from './components/Navbar'
import { Inter, Inconsolata, Roboto } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
// const inconsolata = Inconsolata({subsets:['latin']})
// const roboto = Roboto({subsets:['latin'], weight:['400']})

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'A Next.js Project with TS and TailwindCSS',
  keywords: 'Next.js, TypeScript, TailwindCSS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  )
}
