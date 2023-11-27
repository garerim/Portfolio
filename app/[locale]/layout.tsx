// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import '@/app/globals.css'
// import { ThemeProvider } from '@/src/themes/ThemeProvider'
// import clsx from 'clsx'
// import { Header } from '@/src/feature/layout/Header'
// import { Footer } from '@/src/feature/layout/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Matheo Gareri | Portfolio',
//   description: 'Portfolio of Matheo Gareri, a web developer based in Annecy, France.',
// }

// import { notFound } from 'next/navigation';

// // Can be imported from a shared config
// const locales = ['en', 'fr']

// export default function LocaleLayout({ children, locale }: { children: React.ReactNode, locale: string }) {

//   if (!locales.includes(locale as any)) notFound();

//   return (
//     <html lang={locale} className='h-full'>
//       <body className={clsx(inter.className, 'h-full')}>
//         <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
//           <div className='flex flex-col h-full'>
//             {/* <Header /> */}
//             <div className='text-center h-auto'>
//               {children}
//             </div>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ThemeProvider } from '@/src/themes/ThemeProvider'
import clsx from 'clsx'
import { Header } from '@/src/feature/layout/Header'
import { Footer } from '@/src/feature/layout/Footer'
import NextIntlProvider from "./NextIntlProvider";

const inter = Inter({ subsets: ['latin'] })

import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Matheo Gareri | Portfolio',
  description: 'Portfolio of Matheo Gareri, a web developer based in Annecy, France.',
}

// Can be imported from a shared config
const locales = ['en', 'fr'];

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className='h-full'>
      <body className={clsx(inter.className, 'h-full')}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <NextIntlProvider locale={locale} messages={messages} now={new Date()} timeZone='Europe/Paris'>
            <div className='flex flex-col h-full'>
              <Header />
              <div className='text-center h-auto'>
                {children}
              </div>
              <Footer />
            </div>
          </NextIntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}