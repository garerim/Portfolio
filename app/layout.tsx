import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/src/themes/ThemeProvider'
import clsx from 'clsx'
import { Header } from '@/src/feature/layout/Header'
import { Footer } from '@/src/feature/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheo Gareri | Portfolio',
  description: 'Portfolio of Matheo Gareri, a web developer based in Annecy, France.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={clsx(inter.className, 'h-full')}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <div className='flex flex-col h-full'>
            <Header />
            <div className='text-center h-auto'>
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}