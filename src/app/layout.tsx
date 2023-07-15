import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zero 27 Code',
  description: 'Nós da Zero 27 Code, somos apaixonados por criar soluções inovadoras e de ponta que ajudam as empresas a prosperar no cenário digital atual.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='bottom-right'/>
        {children}
      </body>
    </html>
  )
}
