import './globals.css'
import './_layout/_layout.css'
import '/node_modules/primeflex/primeflex.css'
import { Inter } from 'next/font/google'
import {AppNavBar} from "@/app/_layout/_app-nav-bar";
import {AppSideBar} from "@/app/_layout/_app-side-bar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`layout-wrapper ${inter.className}`}>
      <div className='topbar-layout-wrapper'>
          <AppNavBar />
          <header className='header-wrapper block w-full flex justify-content-center align-items-center'>
              <div>Welcome Back Gideon!</div>
          </header>
      </div>
      <main className='main-content-wrapper'>
              <AppSideBar />
          {children}
      </main>
      </body>
    </html>
  )
}
