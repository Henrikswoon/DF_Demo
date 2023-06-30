import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Knightec Digital Fotovägg',
  description: 'Ett digitalt komplement till fotoväggen',
}

export default function RootLayout(props: {
  children: React.ReactNode, modal: React.ReactNode
}) {

  if(props.modal){
    console.log(props.modal);
  }

  return (
    <html lang="en">
      <body className={inter.className}>

      {props.modal} {props.children} 

      </body>
    </html>
  )
}
