import { Inter } from 'next/font/google'
import './globals.css'

 import Footer from './components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cheema Foods LTD',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>     
        
        {children}
          <Footer/>
        {/* <div className='h-full w-full flex justify-between z-10 absolute top-0'>
          <div className='border-l border-white opacity-10 h-full w-1'></div>
          <div className='border-l border-white opacity-10 h-full w-1'></div>
          <div className='border-l border-white opacity-10 h-full w-1'></div>
          <div className='border-l border-white opacity-10 h-full w-1'></div>
      </div> */}
     
        </body>
    </html>
  )
}
