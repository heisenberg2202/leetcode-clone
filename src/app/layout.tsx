import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leetclone',
  description: 'Leetcode problems and solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <title>LeetClone</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
