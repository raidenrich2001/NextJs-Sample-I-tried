import Navbar from '@component/components/navbar/Navbar'
import './globals.css'
import Footer from '@component/components/footer/Footer'
import { Poppins } from 'next/font/google'
import ThemeProvider from '@component/components/context/ThemeContext';
import { AuthProvider } from '@component/components/AuthProvider/AuthProvider';


const inter = Poppins({ weight: "400",  subsets: ['latin'] })

export const metadata = {
  title: 'Richard',
  description: 'Description',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className='container'>
          <Navbar></Navbar>      
            {children}
          <Footer></Footer>
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
