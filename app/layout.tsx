import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutSidebar from './components/layout/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cudo Test',
  description: '-',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex w-full h-screen'>
          <div>
            <LayoutSidebar />
          </div>
          <div className='grow overflow-y-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
